import { Table, Typography, Image } from "antd"
import { pokemons } from '../data'

const colums = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number'
    },
    {
        title: 'Type',
        dataIndex: 'classfication',
        key: 'class',
        filters: [
            {
                text: "fire",
                value: "fire",
            },
            {
                text: "water",
                value: "water",
            },
            {
                text: "flying",
                value: "flying",
            },
        ],
        onFilter: (value, item) => item.classfication.includes(value)
    },
    {
        title: 'Rate',
        dataIndex: 'fleeRate',
        key: 'fleeRate',
        sorter: (a, b) => a.fleeRate - b.fleeRate,
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image src={image} alt='pokemon' width={150} />
    },
]

const dataSource = pokemons.map(item => ({ ...item, key: item.id }))

const _Table = ({ rows = 10 }) => {
    return (
        <Table dataSource={dataSource}
            columns={colums}
            pagination={{
                defaultPageSize: '5',
                showSizeChanger: true,
                pageSizeOptions: [5, 10, 15, 20],
            }}
        />
    )
}

export default _Table

