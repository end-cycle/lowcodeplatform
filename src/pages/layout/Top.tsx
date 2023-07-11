import React, { useEffect } from 'react';
import { Button } from 'antd';

const Top: React.FC = () => {
    return (
        <div className="flex justify-between">
            <div className='flex flex-row'>
                <img src={require('@/assets/pc.png')} alt="" className='w-5 h-5' />
                <img src={require('@/assets/phone.png')} alt="" className='w-5 h-5' />
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <div className='flex flex-row'>
                    <img src={require('@/assets/ctrl-z.png')} alt="" className='w-5 h-5' />
                    <img src={require('@/assets/ctrl-z.png')} alt="" className='w-5 h-5 scale-x-[-1] opacity-30' />
                </div>
                <div className='flex gap-3'>
                    <Button size='middle'>
                        静态定位
                    </Button>
                    <Button size='middle'>
                        保存
                    </Button>
                    <Button size='middle'>
                        导入JSON
                    </Button>
                    <Button size='middle'>
                        重置
                    </Button>
                    <Button size='middle'>
                        预览
                    </Button>
                    <Button size='middle'>
                        发布
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Top;