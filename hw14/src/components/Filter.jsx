import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

const Filter = ({ setFilter }) => {
    return (
        <input
        type = "text"
        placeholder="Filter users..."
        onChange = {(e) => setFilter(e.target.value)}
        className={styles.filterinput}
        />
    );
};

export default connect(null, { setFilter })(Filter); 