import React, { Component } from 'react';

class Block extends Component {

    onBatchSelect(block) {
        this.props.history.push(`/room/${block}`);
    }
    render() {
        return (
            <div className="mid container">
                <h2 className="text-center mb-4">Select Block</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div className="card" style={{ width: "12rem", marginBottom: '1rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Block A</h5>
                            <p onClick={() => this.onBatchSelect('A')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem", marginBottom: '1rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Block B</h5>
                            <p onClick={() => this.onBatchSelect('B')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem", marginBottom: '1rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Block C</h5>
                            <p onClick={() => this.onBatchSelect('C')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem", marginBottom: '1rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Block D</h5>
                            <p onClick={() => this.onBatchSelect('D')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem", marginBottom: '1rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Block E</h5>
                            <p onClick={() => this.onBatchSelect('E')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem", marginBottom: '1rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Block F</h5>
                            <p onClick={() => this.onBatchSelect('F')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;