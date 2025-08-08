import { type FC } from "react";
import Select, { type SingleValue } from "react-select";
import {
  SupportedLanguages,
  type LanguageOption,
} from "../../data/SupportedLanguges";

interface LanguageSelectProps {
  currentLanguage: string;
  onChangeLanguage: (language: string) => void;
}

const LanguageSelect: FC<LanguageSelectProps> = ({
  currentLanguage,
  onChangeLanguage,
}) => {
  const formatOptionLabel = (option: LanguageOption) => {
    return (
      <div className="flex items-center space-x-2">
        <img src={option.icon} className="w-4 h-3" alt="" />
        <span>{option.label}</span>
      </div>
    );
  };
  const handleChange = (newValue: SingleValue<LanguageOption>) => {
    if (newValue) {
      onChangeLanguage(newValue.value);
    }
  };

  return (
    <Select<LanguageOption>
      value={SupportedLanguages.find((opt) => opt.value === currentLanguage)}
      onChange={handleChange}
      options={SupportedLanguages}
      formatOptionLabel={formatOptionLabel}
      unstyled
      classNames={{
        control: () =>
          "bg-gray-800 border border-cyan-500/40 hover:border-purple-400 min-h-[36px] w-[130px] rounded-md p-1 transition-colors",
        menu: () =>
          "bg-gray-800 min-w-[130px] mt-1 rounded-md border border-gray-600 shadow-lg",
        option: ({ isSelected }) =>
          `px-3 py-2 ${
            isSelected ? "bg-purple-500/20" : "bg-gray-800"
          } hover:bg-gray-700`,
        singleValue: () => "text-white flex justify-center",
        dropdownIndicator: () => "text-gray-400 hover:text-white px-1",
        indicatorsContainer: () => "flex items-center",
      }}
      isSearchable={false}
    />
  );
};

export default LanguageSelect;
