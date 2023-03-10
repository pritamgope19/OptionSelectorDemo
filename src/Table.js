import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { useFormContext } from 'react-hook-form';

export default function Table() {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [showInputE, setShowInputE] = useState(false);
  const [showInputF, setShowInputF] = useState(false);
  const [showInputG, setShowInputG] = useState(false);

  useEffect(() => {
    console.log('errors', errors);
    console.log('getValues', getValues());
  }, [getValues(['e', 'f', 'g']), errors]);
  return (
    <form>
      <Card className="p-1">
        <Card.Body className="p-0">
          <Table striped bordered hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th colSpan={2}>IP1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>
                  <select class="select bg-dark text-white border-0">
                    <option value="Select 1">Select 1</option>
                    <option value="Select 2">Select 2</option>
                    <option value="Select 3">Select 3</option>
                    <option value="Select 4">Select 4</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>Select 2</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Select 3</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Select 4</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className="p-1">
        <Card.Body className="p-0">
          <Table striped bordered hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th colSpan={2}>IP2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E</td>
                <td onDoubleClick={() => setShowInputE(true)}>
                  {showInputE ? (
                    <input
                      type="number"
                      className="bg-dark text-white border-0"
                      onBlurCapture={() => setShowInputE(false)}
                      {...register('e', {
                        setValueAs: (v) => parseInt(v),
                        maxLength: {
                          value: 100,
                          message: 'Max Length is 100',
                        },
                      })}
                    />
                  ) : (
                    getValues('e')
                  )}
                  {errors.e && <p>{errors.e.message}</p>}
                </td>
              </tr>
              <tr>
                <td>F</td>
                <td onDoubleClick={() => setShowInputF(true)}>
                  {showInputF ? (
                    <input
                      type="number"
                      className="bg-dark text-white border-0"
                      defaultValue={Number(getValues('e')) + 1}
                      onBlurCapture={() => setShowInputF(false)}
                      {...register('f', {
                        setValueAs: (v) => parseInt(v),
                        maxLength: {
                          value: 100,
                          message: `Number must be in the range of ${getValues(
                            'e'
                          )} to 100`,
                        },
                        minLength: {
                          value: getValues('e'),
                          message: `Number must be in the range of ${getValues(
                            'f'
                          )} to 100`,
                        },
                      })}
                    />
                  ) : (
                    getValues('f')
                  )}
                </td>
              </tr>
              <tr>
                <td>G</td>
                <td onDoubleClick={() => setShowInputG(true)}>
                  {showInputG ? (
                    <input
                      type="number"
                      className="bg-dark text-white border-0"
                      defaultValue={Number(getValues('f')) + 1}
                      onBlurCapture={() => setShowInputG(false)}
                      {...register('f', {
                        setValueAs: (v) => parseInt(v),
                        maxLength: {
                          value: 100,
                          message: `Number must be in the range of ${getValues(
                            'f'
                          )} to 100`,
                        },
                        minLength: {
                          value: getValues('f'),
                          message: `Number must be in the range of ${getValues(
                            'f'
                          )} to 100`,
                        },
                      })}
                    />
                  ) : (
                    getValues('g')
                  )}
                </td>
              </tr>
              <tr>
                <td>H</td>
                <td>
                  {' '}
                  <select class="select bg-dark text-white border-0">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className="p-1">
        <Card.Body className="p-0">
          <Table striped bordered hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th colSpan={2}>IP3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>
                  <select class="select bg-dark text-white border-0">
                    <option value="Select 1">Select 1</option>
                    <option value="Select 2">Select 2</option>
                    <option value="Select 3">Select 3</option>
                    <option value="Select 4">Select 4</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>Select 2</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Select 3</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Select 4</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </form>
  );
}
