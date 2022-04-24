import { useState } from 'react';
import { FilterData, Gender } from '../../../types';
import './styles.css';
/* import { Controller } from 'react-hook-form';
import Select from 'react-select'; */

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [gender, setGender] = useState<Gender>();

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;
    setGender(selectedGender);
    onFilterChange({ gender: selectedGender });
  };

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

      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
