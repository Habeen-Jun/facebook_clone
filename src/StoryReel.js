import React from 'react'
import Story from "./Story"
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
                title="Lionel Messi"
                />
            <Story
                image="https://pbs.twimg.com/media/EZxZP-FXgAE8TDV.jpg"
                profileSrc="https://pbs.twimg.com/media/EZxZP-FXgAE8TDV.jpg"
                title="Habeen Jun"
            />
        </div>
    )
}

export default StoryReel
