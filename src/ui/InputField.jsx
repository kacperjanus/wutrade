function InputField({
    fieldName,
    label,
    defaultValue,
    type,
    registerFunction,
}) {
    return (
        <div className="flex flex-col">
            <label className="ml-2 text-xl">{label}</label>
            <input
                className="bg-slate-700 focus:outline-0 bg-opacity-50 rounded-full px-4 py-2 focus:shadow-lg focus:shadow-sky-300/20"
                defaultValue={defaultValue}
                type={type}
                {...registerFunction(fieldName)}
            />
        </div>
    );
}

export default InputField;
