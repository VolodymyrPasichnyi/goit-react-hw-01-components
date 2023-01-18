import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css'


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id}) => {
                return (
                  <FriendListItem 
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                  />
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
 friends: PropTypes.arrayOf(
    PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired
 )   
}