import s from "./FilterPanel.module.scss";
import Button from "@UI/Button";
import Input from "@UI/Input";
import MultiDropdown from "@UI/MultiDropdown";
import Text from "@UI/Text";
import { useProductListStore } from "../../context";
import { observer } from "mobx-react-lite";
import { useDebouncedCallback } from "use-debounce";
import { useTranslations } from "next-intl";

type FilterPanelProps = {
  total?: number;
};

const FilterPanel = observer(({ total }: FilterPanelProps) => {
  const productListStore = useProductListStore();
  const sortOptions = ['price', 'rating'] as const;
  const t = useTranslations();

  const debouncedSubmit = useDebouncedCallback(
    () => productListStore.submitSearch(),
    500
  );

  return (
    <div className={s.FilterPanel}>
      <div className={s.search}>
        <Input
          className={s.input}
          value={productListStore.searchQuery}
          onChange={(value) => {
            productListStore.setSearch(value);
            debouncedSubmit();
          }}
          placeholder={t('filter.search')}
        />
        {productListStore.searchQuery && (
          <Button
            className={s.button}
            onClick={() => {
              debouncedSubmit.cancel();
              productListStore.setSearch('');
              productListStore.submitSearch();
            }}
          >
            ✕
          </Button>
        )}
      </div>
      <div className={s.filterOption}>

        <MultiDropdown
          options={productListStore.categories}
          value={productListStore.selectedCategories}
          onChange={productListStore.setCategories}
          getTitle={(selected) =>
            selected.length === 0
              ? t('filter.filter')
              : selected.map((o) => o.value).join(", ")
          }
          className={s.dropdown}
        />

        <div className={s.priceRange}>
          <Input
            className={s.priceInput}
            value={productListStore.priceMin}
            onChange={productListStore.setPriceMin}
            placeholder={t('filter.priceFrom')}
          />
          <Input
            className={s.priceInput}
            value={productListStore.priceMax}
            onChange={productListStore.setPriceMax}
            placeholder={t('filter.priceTo')}
          />
        </div>


        <div className={s.sort}>
          {sortOptions.map((field) => {
            const isActive = productListStore.sortField === field;
            const order = isActive ? productListStore.sortOrder : null;
            return (
              <Button
                key={field}
                onClick={() => {
                  const nextOrder = isActive && order === 'asc' ? 'desc' : 'asc';
                  productListStore.setSort(field, nextOrder);
                }}
              >
                {field === 'price' ? t('filter.price') : t('filter.rating')}
                {isActive ? (order === 'asc' ? ' ↑' : ' ↓') : ''}

              </Button>
            );
          })}
        </div >
      </div>
      <div className={s.text}>
        <Text className={s.totalProducts}>{t('filter.totalProducts')}</Text>
        <Text color="accent" className={s.total}>
          {total ?? "—"}
        </Text>
      </div>
    </div >
  );
});

export default FilterPanel;
