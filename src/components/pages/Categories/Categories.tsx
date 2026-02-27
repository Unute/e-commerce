import Loader from "@/components/UI/Loader";
import { useStore } from "@/stores/context"
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Categories = observer(() => {
  const { productListStore } = useStore();

  useEffect(() => {
    productListStore.fetchCategories();
  }, [])

  
  if(productListStore.categories.length === 0) {
    return <Loader size="l" />
  }
  
  return (
    <>
      {productListStore.categories.map((cat, id) => {
        return <div key={id}>{cat.value}</div>
      })}
    </>
  )
})

export default Categories