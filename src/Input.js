import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
export default function Input() {
  return (
    <div className="w-100">
      <div className="w-100">
        <h3 className="w-25 m-auto">Input</h3>
      </div>
      <div className="w-100 text-center">
        <div className="w-75 bg-warning float-left">
          <div className="row p-1">
            <div className="col-4 ">g</div>
            <div className="col-4">h</div>
            <div className="col-4">l</div>
          </div>
          <div className="row p-1">
            <div className="col-4">
              <div className="row">
                <div className="col">IP 1</div>
              </div>
              <div className="row">
                <div className="col-6">A</div>
                <div className="col-6">
                  <select>
                    <option>Select 1</option>
                    <option>Select 2</option>
                    <option>Select 3</option>
                    <option>Select 4</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">B</div>
                <div className="col-6">Select 2</div>
              </div>
              <div className="row">
                <div className="col-6">C</div>
                <div className="col-6">Select 3</div>
              </div>
              <div className="row">
                <div className="col-6">D</div>
                <div className="col-6">Select 4</div>
              </div>
            </div>
            <div className="col-4">l</div>
            <div className="col-4">m</div>
          </div>
        </div>
        <div className="w-25 bg-danger float-right">
          <div className="row p-1">
            <div className="col-4">g</div>
            <div className="col-4">h</div>
            <div className="col-4">l</div>
          </div>
          <div className="row p-1">
            <div className="col-4">k</div>
            <div className="col-4">l</div>
            <div className="col-4">m</div>
          </div>
        </div>
      </div>
    </div>
  );
}
