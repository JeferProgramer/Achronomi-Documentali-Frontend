//me traigo nuestr logo
import avatar from "../../../../assets/logo.jpeg"

const Avatar = () => {
    return (
        <div>
            <img style={{ width: 40, height: 40, marginRight: 13, marginTop: 3 }} src={avatar} alt="logo" />
        </div>
    )
}
export default Avatar
