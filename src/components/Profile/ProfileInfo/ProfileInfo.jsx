import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if(!props.profile) {
        return <Preloader />
    }

    /*const Contact = ({contactTitle, contactValue}) => {
        return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
    }*/

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {/*<div>
            <img src='https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' width="500px"/>
        </div>*/}
            <div className={s.description}>
                <img src={props.profile.photos.large}/>
                {props.isOwner && <input type={'file'} onChange={onPhotoSelected}/>}

               {/* <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>*/}
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                {/*<div>aboutMe: {props.profile.aboutMe}</div>
                <div>FullName - {props.profile.fullName}</div>*/}
            </div>
        </div>

    )
}

   /* const ProfileData=(props)=> {
        return (
            <div>
                <div>
                    <img src={props.profile.photos.large} className={s.mainPhoto}/>
                    {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
                </div>
            <div>
            <b>Full name</b> : {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b> : {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>:{props.profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>Looking for a job</b> : {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>

        <div>
            <b> About me </b>: {props.profile.aboutMe}
        </div>

        <div>
            <b> Contacts </b>: {Object.keys(props.profile.contacts).map(key =>
        {return <Contact key={key} contactValue={props.profile.contacts[key]}/>})}
        </div>
    </div>)
    }*/

export default ProfileInfo;