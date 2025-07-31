import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createRoomAction, getRoomAction } from '../../actions/roomActions';
import axios from 'axios';
import ReactLoading from 'react-loading';

class RoomAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            block: this.props.match.params.id,
            id: '',
            type: '',
            incharge: '',
            time: '',
            gender: '',
            hostel: '',
            errors: {},
            staffList: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        
        // Auto-set gender based on hostel selection
        if (name === 'hostel') {
            if (value === 'BOYS HOSTEL') {
                this.setState({ gender: 'BOY' });
            } else if (value === 'GIRLS HOSTEL') {
                this.setState({ gender: 'GIRL' });
            } else {
                this.setState({ gender: '' });
            }
        }
    }
    async onDelete(_id) {
        await axios.delete(`/api/room/${_id}`).then(res => console.log(res)).catch(err => console.log(err));
        await this.props.getRoomAction(this.props.match.params.id);
    }
    async onSubmit(e) {
        e.preventDefault();
        console.log(this.props.match.params.id);
        const activityRecord = {
            type: this.state.type,
            incharge: this.state.incharge,
            block: this.state.block,
            id: this.state.id,
            gender: this.state.gender,
            time: this.state.time,
            hostel: this.state.hostel,
        }
        console.table(activityRecord);
        await this.props.createRoomAction(activityRecord);
        this.setState({
            incharge: '',
            type: '',
            id: '',
            gender: '',
            time: '',
            hostel: '',
            errors: {}
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    async componentDidMount() {
        await this.props.getRoomAction(this.props.match.params.id);
        // Fetch available staff
        try {
            const res = await axios.get('/api/staff/');
            const availableStaff = res.data.filter(staff => staff.isAvailable);
            this.setState({ staffList: availableStaff });
        } catch (err) {
            // handle error if needed
        }
    }
    render() {
        const { roomData, loading } = this.props.roomData;
        let tableContent;
        (!roomData.length || loading) ? (
            tableContent = null
        ) : tableContent = roomData.length ? roomData.map(
            el =>
                <tr key={el._id} >
                    <th scope="row">{roomData.indexOf(el) + 1}</th>
                    <td>{el.id ? el.id : "-"}</td>
                    <td>{el.type ? el.type : "-"}</td>
                    <td>{el.time ? el.time : "-"}</td>
                    <td>{el.incharge ? el.incharge : "-"}</td>
                    <td>{el.hostel ? el.hostel : "-"}</td>
                    <td>{el.gender ? el.gender : "-"}</td>
                    <td style={{ cursor: 'pointer', color: '#00a4eb' }}
                        onClick=
                        {() => this.onDelete(el._id)}
                    >
                        Click Me
                    </td>
                </tr>
        ) : null
        const { errors } = this.state;
        return (
            <div className="mid container">
                <h1>{this.state.block}</h1>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="id">Room No.</label>
                            <input type="text" id="id" placeholder="Room No."
                                className={classnames("form-control", {
                                    "is-invalid": errors.id
                                })}
                                onChange={this.onChange}
                                name="id"
                                value={this.state.id}
                            />
                            {errors.id && (
                                <div className="invalid-tooltip">{errors.id}</div>
                            )}
                        </div>

                        <div className="col">
                            <label htmlFor="ex2">Action</label>
                            <select className={classnames("form-control", {
                                "is-invalid": errors.type
                            })}
                                id="ex2" onChange={this.onChange} value={this.state.type}
                                name="type"
                            >   <option value="" defaultValue disabled>Select</option>
                                <option value="CLEANING">Cleaning</option>
                                <option value="REPAIR">Repair</option>
                            </select>
                            {errors.type && (
                                <div className="invalid-tooltip">{errors.type}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="hostel">Hostel</label>
                            <select className={classnames("form-control", {
                                "is-invalid": errors.hostel
                            })}
                                id="hostel" onChange={this.onChange} value={this.state.hostel}
                                name="hostel"
                            >   <option value="" defaultValue disabled>Select Hostel</option>
                                <option value="BOYS HOSTEL">BOYS HOSTEL</option>
                                <option value="GIRLS HOSTEL">GIRLS HOSTEL</option>
                            </select>
                            {errors.hostel && (
                                <div className="invalid-tooltip">{errors.hostel}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlSelect1">Room Occupancy (Auto-set based on Hostel)</label>
                            <input type="text" id="exampleFormControlSelect1" 
                                className={classnames("form-control", {
                                    "is-invalid": errors.gender
                                })}
                                value={this.state.gender}
                                readOnly
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                            {errors.gender && (
                                <div className="invalid-tooltip">{errors.gender}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="time">Date and Time</label>
                            <input type="text" id="time" placeholder="Date and time?"
                                className={classnames("form-control", {
                                    "is-invalid": errors.time
                                })}
                                onChange={this.onChange}
                                name="time"
                                value={this.state.time}
                            />
                            {errors.time && (
                                <div className="invalid-tooltip">{errors.time}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="incharge">Incharge</label>
                            <select
                                id="incharge"
                                name="incharge"
                                className={classnames("form-control", { "is-invalid": errors.incharge })}
                                value={this.state.incharge}
                                onChange={this.onChange}
                            >
                                <option value="" disabled>Select Incharge</option>
                                {this.state.staffList.length === 0 ? (
                                    <option value="" disabled>No staff available</option>
                                ) : (
                                    this.state.staffList.map(staff => (
                                        <option key={staff._id} value={staff.name}>{staff.name} ({staff.occupation})</option>
                                    ))
                                )}
                            </select>
                            {errors.incharge && (
                                <div className="invalid-tooltip">{errors.incharge}</div>
                            )}
                        </div>
                        <div className="col-auto" >
                            <button type="submit" style={{ verticalAlign: '-39px' }} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>

                <div style={{ marginTop: '50px', overflow: 'scroll', maxHeight: 800 }}>
                    {!loading ? <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Room No.</th>
                                <th scope="col">Action</th>
                                <th scope="col">Date and Time</th>
                                <th scope="col">Incharge</th>
                                <th scope="col">Hostel</th>
                                <th scope="col">Room Occupancy</th>
                                <th scope="col">Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table> : <div style={{ display: 'flex', justifyContent: 'center' }}><ReactLoading type="bars" color="#f56f42" /></div>}
                </div>
            </div>
        );
    }
}

RoomAction.propTypes = {
    createRoomAction: PropTypes.func.isRequired,
    getRoomAction: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
    roomData: state.roomData,
});
export default connect(mapStateToProps, { createRoomAction, getRoomAction })(RoomAction);