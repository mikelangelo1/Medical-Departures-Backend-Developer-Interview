import * as React from 'react'
import { SearchBarProps } from '../@types/appTypes'

import * as TsSvgs from '../assets/tsSvgs'
import { addClassNames, omitEmptyObjectValues } from '../utils/functions'
import { useGetAllUsersQuery } from '../store/rtk-query/userApi'

const SearchBar = (props: SearchBarProps) => {
    const [search, setSearch] = React.useState<string>('')

    const { selectedItem } = props

    const queryParams = omitEmptyObjectValues(
        {
            searchPhrase: search
        })

    const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery(
        {
            queryParams
        }
    )

    React.useEffect(() => {
        props.onResultChange?.(usersData)
    }, [usersData])

    let showRows = search?.trim() !== '' || selectedItem
    if (props.alwaysShowItems) {
        showRows = true
    }

    let dataToShow = usersData?.data || [];
    if (props.showOnlySelectedItem && selectedItem) {
        dataToShow = [selectedItem]
    }

    return (
        <div className=''>
            <div className='border rounded-[3px] border-[#BCBCBC] px-[12px] py-[9px] flex items-center w-full sm:min-w-[300px]'>
                <input
                    placeholder='Search Users'
                    className='text-[#717171] text-[13px] flex-1'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        props?.onChangeText?.(e.target.value)
                    }}
                />
                <div className='w-[25px] h-[20px]'>
                    <TsSvgs.SearchIcon />
                </div>
            </div>
            {
                showRows ? (
                    <div className='mt-[20px]'>
                        {dataToShow?.map((item: any) => {
                            return (
                                <div
                                    onClick={() => {
                                        props.onSelect?.(item)
                                    }}
                                    key={item.id} className={
                                        addClassNames(
                                            'px-[10px] text-[14px] flex min-h-[40px] items-center mb-[10px] cursor-pointer gap-2',
                                            selectedItem?.id == item?.id ? 'border border-1 border-[#1A2DD8] rounded-sm' : ''
                                        )
                                    }>
                                    <div className='w-[auto]'>{item?.regNumber}</div>
                                    <div className='w-full'>{item?.surname} {item?.firstName} {item?.middleName} </div>
                                </div>
                            )
                        })}
                    </div>
                ) : undefined
            }
        </div>
    )
}

export default SearchBar