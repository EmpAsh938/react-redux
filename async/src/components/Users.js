import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { fetchReq } from '../redux'

const Users = ({ loading, users, error, fetchReq }) => {
  useEffect(() => {
    fetchReq()
  }, [])
 
  if (loading) {
    <h1>Loading...</h1>
  }
  
  return (
      <section>
        {users.map(item => {
          const {
            name: {first, last}, 
            location: { city }, 
            login: {username, password}, 
            dob: {age}, 
            phone , 
            picture: {large} 
          } = item
          return (
        <article>
          <img src={large} alt={first}/>
          <div>
          <p>Name: {first+" "+last}</p>
          <p>Age: {age}</p> 
          <p>LoginID: {username}</p> 
          <p>LoginPassword: {password}</p> 
          <p>Phone: {phone}</p> 
          <p>Location: {city}</p>
          </div>
        </article>
          )
        })}
      </section>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchReq: () => dispatch(fetchReq())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
