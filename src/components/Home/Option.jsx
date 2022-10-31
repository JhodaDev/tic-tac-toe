import { handleActive } from '../../helpers/main'

export const Option = ({ children, active, onClick }) => {
  const handleClick = (e) => {
    handleActive(e)
    onClick()
  }

  return (
        <div className={`w-full flex justify-center px-14 py-2 rounded-lg cursor-pointer ${active ? 'bg-select' : ''}`} onClick={handleClick}>
            <div className='w-8'>
                {children}
            </div>
        </div>
  )
}
