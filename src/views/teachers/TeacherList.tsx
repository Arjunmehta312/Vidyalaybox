import { useState } from 'react'
import SearchInput from '@/components/shared/SearchInput'

const TeacherList = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (value: string) => {
        setSearchQuery(value)
        // Here you would typically:
        // 1. Filter the teachers list based on search query
        // 2. Make an API call with the search parameter
        // 3. Update the table data
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h3>Teachers</h3>
                <div className="w-72"> {/* Fixed width for search input */}
                    <SearchInput 
                        onSearchChange={handleSearch}
                        placeholder="Search teachers..."
                    />
                </div>
            </div>
            {/* Rest of your table component */}
        </div>
    )
}

export default TeacherList 