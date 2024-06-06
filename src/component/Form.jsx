import React from 'react'
function Form({
    handleSubmit,
    handleChange,
    value
}) {
    return (
        <div className='flex w-full overflow-hidden shadow-xl rounded-2xl'>
            <form className="flex items-center w-full overflow-hiden" onSubmit={handleSubmit}>
                <input
                    className='w-full h-10 px-4 py-1 bg-transparent border-white rounded-lg outline-none'
                    type="text"
                    value={value} // Use curly braces for dynamic values
                    placeholder="Enter City Name"
                    onChange={handleChange}
                />
                <button
                    className='bg-blue-600 items-center p-2.5 shrink-0'
                    type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Form
