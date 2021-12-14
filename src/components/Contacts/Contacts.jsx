import styles from "./Contacts.module.css";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li className={styles.item} key={id}>
                    <span className={styles.span}>{name}: </span>
                    <span className={styles.span}>{number}</span>
                    <button onClick={() => onDelete(id)} className={styles.btn}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

Contacts.propTypes = {
    contacts: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};

export default Contacts;
