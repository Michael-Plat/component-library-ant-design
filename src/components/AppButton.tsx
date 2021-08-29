import React from 'react';

import { Button, Radio, } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { ButtonSize } from 'antd/lib/button';
import { RadioChangeEvent } from 'antd/lib';

type PropsType = {}
type StateType = {
    size: ButtonSize
}

export class AppSizeButton extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            size: 'large',
        };
    }

    handleSizeChange = (e: RadioChangeEvent) => {
        this.setState({ size: e.target.value });
    };

    render() {
        const { size } = this.state;
        return (
            <>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br />
                <br />
                <Button type="primary" size={size}>
                    Primary
                </Button>
                <Button size={size}>Default</Button>
                <Button type="dashed" size={size}>
                    Dashed
                </Button>
                <br />
                <Button type="link" size={size}>
                    Link
                </Button>
                <br />
                <Button type="primary" icon={<DownloadOutlined />} size={size} />
                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                    Download
                </Button>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                    Download
                </Button>
            </>
        );
    }
}

