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
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Chọn trường"
                isClearable
            />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            )}
        </div>
    );
}

export default Universities;
