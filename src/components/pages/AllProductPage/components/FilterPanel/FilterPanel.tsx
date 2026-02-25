import s from "./FilterPanel.module.scss";

import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Text from "@/components/UI/Text";

type FilterPanelProps = {
  total?: number;
};

const FilterPanel = ({ total }: FilterPanelProps) => {
  return (
    <div className={s.FilterPanel}>
      <div className={s.search}>
        <Input
          className={s.input}
          value="Search product"
          onChange={() => {
            //TODO: сделать обработку поиска
          }}
        />
        <Button>Search</Button>
      </div>
      <div className={s.text}>
        <Text className={s.totalProducts}>Total products</Text>
        <Text color="accent" className={s.total}>
          {total ?? "—"}
        </Text>
      </div>
    </div>
  );
};

export default FilterPanel;
