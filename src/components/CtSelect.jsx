import { Select } from "antd"



const CtSelect = (props) => {

    const onChange = (value) => {
        props.setDataOpt(value)

        }
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    
    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Select
            showSearch
            placeholder="Select a person"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
                {
                    value: 'opt1',
                    label: 'Option1',
                },
                {
                    value: 'opt2',
                    label: 'Option2',
                },
                {
                    value: 'opt3',
                    label: 'Option3',
                },
            ]}
        />
    )
}
export default CtSelect;