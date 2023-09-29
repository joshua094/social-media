import './comments.scss'

const Comments = () => {
    //Temporary
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum ab sed ex blanditiis vitae adipisci debitis similique alias quis, eos perferendis",
            name: "John Doe",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum ab sed ex blanditiis vitae adipisci debitis similique alias quis, eos perferendis",
            name: "John Doe",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]


  return (
    <div className='comments'>
        <div className="write">
            <img src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <input type="text" placeholder='write a comment' />
            <button>Send</button>
        </div>
        {
        comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments