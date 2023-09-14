import profile from '../../assets/img/profile.png'

function Header() {
    return (
        <div className='flex justify-between items-center py-5'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img className='w-10' src={profile} alt="Blog Header Profile picture" />
        </div>
    )
}

export { Header };


