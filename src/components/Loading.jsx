import spinner from '../spinner.svg';

export const Loader = ({ isLoading }) => {
    return (
        isLoading ? <div className='loader'><img src={spinner} /></div> : null
    )
}