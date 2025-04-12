import { useField, useFormikContext } from 'formik';
import Select from 'react-select';

function Universities({ name, options = [] }) {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const formattedOptions = options.map((univ) => {
        if (typeof univ === 'string') {
            return { label: univ, value: univ };
        }
        if (typeof univ === 'object' && univ.label && univ.value) {
            return univ;
        }
        // fallback nếu object sai format
        const value = univ.name || univ.value || 'Unknown';
        return { label: value, value };
    });
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <Select
    id={name}
    name={name}
    options={formattedOptions}
    value={formattedOptions.find((opt) => opt.value === field.value) || null}
    onChange={(selectedOption) =>
      setFieldValue(name, selectedOption?.value || '')
    }
    placeholder="Chọn trường"
    isClearable
    styles={{
      control: (base, state) => ({
        ...base,
        minHeight: '3rem', // h-12
        fontSize: '1.0rem', // text-lg
        borderWidth: '2px',
        borderRadius: '0.375rem', // rounded
        borderColor: state.isFocused ? '#8A65AC' : '#D1D5DB', // focus or default
        boxShadow: state.isFocused ? '0 0 0 2px #8A65AC55' : 'none', // focus:ring
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: '#AD2971', // hover
        },
        backgroundColor: 'white',
      }),
      valueContainer: (base) => ({
        ...base,
        padding: '0 0.5rem', // px-2
      }),
      placeholder: (base) => ({
        ...base,
        color: '#9CA3AF', // text-gray-400
      }),
      input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
      }),
      menu: (base) => ({
        ...base,
        zIndex: 50,
      }),
    }}
  />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            )}
        </div>
    );
}

export default Universities;
