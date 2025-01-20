import { useState } from 'react'
import Input from '@/components/ui/Input'
import { HiOutlineSearch } from 'react-icons/hi'
import type { InputProps } from '@/components/ui/Input'

interface SearchInputProps extends Omit<InputProps, 'prefix'> {
    onSearchChange?: (value: string) => void
}

const SearchInput = ({
    onSearchChange,
    className,
    ...rest
}: SearchInputProps) => {
    const [value, setValue] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value
        setValue(searchValue)
        onSearchChange?.(searchValue)
    }

    return (
        <Input
            {...rest}
            value={value}
            className={className}
            prefix={<HiOutlineSearch className="text-lg" />}
            onChange={handleSearch}
            placeholder="Search..."
        />
    )
}

export default SearchInput 