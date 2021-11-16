import React from 'react';
import { useHistory } from 'react-router-dom';
import { editWorker } from "../../redux/actions/items";
import { connect } from 'react-redux';
import './TableItem.scss';

const TableItem = (props) => {

  const history = useHistory();

  const { id, name, role, birthday, phone  } = props.props;

  let roleObj = {
    assistant: {
      id: 'assistant',
      translate: 'Ассистент'
    },
    science_doctor: {
      id: 'science_doctor',
      translate: 'Доктор наук'
    },
    leader: {
      id: 'leader',
      translate: 'Глава компании'
    }
  };

  function handleClick(id) {
    history.push(`/edit/${id}`);
  }

  return (
        <tr className="table-item" onClick={() => handleClick(id)}>
          <td> { id } </td>
          <td> {name} </td>
          <td> {birthday} </td>
          <td> {roleObj[role].translate} </td>
          <td> {phone} </td>
        </tr>

  );
}

const mapStateToProps = state => {
  return {
    // isArchive: state.itemsStorage.
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editEvent: (id) => dispatch(editWorker(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
