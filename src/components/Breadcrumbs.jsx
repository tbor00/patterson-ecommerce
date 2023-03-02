import React from 'react'

const InsertSeparators = ({ separator }) => {
    if (separator) return <>{separator}</>
    return '/'
}

const Breadcrumbs = (props) => {
    const { options } = props

    const isActiveLink = React.useCallback((indexKey) => {
        return options.length - 1 === indexKey
    }, [])

    return (
        <div className="flex gap-4 items-center">
            {options.map(({ name, id }, indexKey) => (
                <React.Fragment key={id}>
                    <p className={`cursor-pointer text-sm ${isActiveLink(indexKey) ? 'text-black font-bold' : 'text-gray-500 font-medium'}`}>
                        {name && name.charAt(0).toLocaleUpperCase() + name.slice(1)}
                    </p>
                    {!isActiveLink(indexKey) && <InsertSeparators />}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Breadcrumbs
