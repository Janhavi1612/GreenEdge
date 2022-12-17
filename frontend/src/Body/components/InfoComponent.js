import { Table } from 'antd';

const columns = [
    {
        title: 'Property Name',
        dataIndex: 'name',
    },
    {
        title: 'Value',
        dataIndex: 'value',
    },
];

const InfoComponent = (props) => {
    let dataArray = [
        {
            name: '',
            value: ''
        }]

    const processDataInformation = () => {
        let dataToShow = props.text
        if (dataToShow !== '') {
            dataArray = []
            let jsonObject = JSON.parse(dataToShow)
            for (var key in jsonObject) {
                dataArray.push(
                    {
                        name: key,
                        value: jsonObject[key]
                    }
                )
            }
        }
    }

    processDataInformation();

    return (
        <div>
            <Table
                pagination={false}
                columns={columns}
                dataSource={dataArray}
                size="middle"
                bordered = "true"
            />
        </div>
    )
}

export default InfoComponent