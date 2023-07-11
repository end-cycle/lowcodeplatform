import React, { useEffect } from 'react';
import { Button, Radio, Space, Divider } from 'antd';

const PageHeader: React.FC = () => {
    return (
        <div className=''>
            {/* <div className="underline">hello world</div> */}
            <div className='w-full h-12 flex mb-0.5 items-center justify-between bg-blue-100'>
                <div className='flex items-center'>
                    <img src={require('@/assets/logo3.png')} alt='logo' className='w-10 h-10'></img>
                    <p className='text-center w-20 whitespace-normal break-words'>LowCode AnyLayout</p>
                </div>
                <Space wrap>
                    <Button type="primary" size='large' ghost>
                        导出HTML
                    </Button>
                    <Button type="primary" size='large' ghost>
                        导出Vue
                    </Button>
                    <Button type="primary" size='large' ghost>
                        导出JSON
                    </Button>
                </Space>
            </div>
        </div>
    )
}
export default PageHeader;