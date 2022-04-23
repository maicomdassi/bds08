import './styles.css';
/* import { Controller } from 'react-hook-form';
import Select from 'react-select'; */

function Filter() {
  return (
    <div className="filter-container base-card">
      {/*       <div className="product-filter-category-conatiner">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectCategories}
              classNamePrefix="product-filter-select"
              isClearable
              placeholder="Categoria"
              getOptionLabel={(category: Category) => category.name}
              getOptionValue={(category: Category) => String(category.id)}
              onChange={(value) => handleChangeCategory(value as Category)}
            />
          )}
        />
      </div> */}

      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
