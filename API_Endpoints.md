# API Documentation

## Routes Available: 
- `/api/users`
- `/api/student`
- `/api/room`
- `/api/staff`

### Endpoints for `/api/users`:

1. `/api/users/test` - To test current Route
```
Request Type: GET
Response: { msg: "It works!!" }
```
2. `/api/users/register` - To Register new User
```
Request Type: POST
Request Body: {name: 'Type String', email: 'Type String', password: 'Type String'}
Response: {name: 'String', email: 'String', password: 'Hash of Original String', avatar: 'fetched from gravatar'}
```

3. `/api/users/login` - To login and return Auth Token
```
Request Type: POST
Request Body: {email: 'Type String', password: 'Type String'}
Response: {success: true, token: "Bearer "+ token}
```

4. `/api/users/current` - To fecth current login user details
```
Request Type: GET
Response: {id: 'Type String', name: 'Type String', email: 'Type String'}
```

### Endpoints for `/api/student`:

1. `/api/student/` - To add a new Student
```
Request Type: POST
Request Body: {name:'Type String', email:'Type String', batch:'Type Number (2022-2026)', id:'Type String', block:'Type String (A-F)', hostel:'Type String (BOYS HOSTEL or GIRLS HOSTEL)', room:'Type String', gender: 'MALE or FEMALE'}
Response: {name:'Type String', email:'Type String', batch:'Type Number', id:'Type String', block:'Type String', hostel:'Type String', room:'Type String', gender: 'MALE or FEMALE'}

Validation Rules:
- MALE students can only be assigned to BOYS HOSTEL
- FEMALE students can only be assigned to GIRLS HOSTEL
- Batch must be between 2022 and 2026
- Block must be A, B, C, D, E, or F
```

2. `/api/student/batch/:batch` - To get the students of given `:batch`
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type Number', id:'Type String', block:'Type String', hostel:'Type String', room:'Type String', gender: 'MALE or FEMALE'}, ...]
```

3. `/api/student/room/:room` - To get the students of given `:room`
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type Number', id:'Type String', block:'Type String', hostel:'Type String', room:'Type String', gender: 'MALE or FEMALE'}, ...]
```

4. `/api/student/id/:id` - To get the student with given `:id`
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type Number', id:'Type String', block:'Type String', hostel:'Type String', room:'Type String', gender: 'MALE or FEMALE'}]
```

5. `/api/student/all` - To get the details of all the students
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type Number', id:'Type String', block:'Type String', hostel:'Type String', room:'Type String', gender: 'MALE or FEMALE'}, ...]
```

6. `/api/student/availability` To update the student availability
```
Request Type: PUT
Request Body: {id: 'Type String', isAvailable: 'true or false'}
Response: { message: 'Student availability has been updated.', success: true }
```

7. `/api/student/` - To delete the a student details
```
Request Type: DELETE
Request Body: {id: 'Type String'}
Response: { message: `Student with ID ${id} has been deleted`, success: true }
```

### Endpoints for `/api/room`:

1. `/api/room/block/:block` - To get the room of a given `:block`
```
Request Type: GET
Response: [{id:'Type String', type:'CLEANING or REPAIR', block:'A or B or C or D or E or F', hostel:'BOYS HOSTEL or GIRLS HOSTEL', incharge:, time:'Type String', gender:'BOY or GIRL'}, ...]
```

2. `/api/room/all` - To Get all the rooms
```
Request Type: GET
Response: [{id:'Type String', type:'CLEANING or REPAIR', block:'A or B or C or D or E or F', hostel:'BOYS HOSTEL or GIRLS HOSTEL', incharge:, time:'Type String', gender:'BOY or GIRL'}, ...]
```

3. `/api/room/` - To add new room
```
Request Type: POST
Request Body: {id:'Type String', type:'CLEANING or REPAIR', block:'A or B or C or D or E or F', hostel:'BOYS HOSTEL or GIRLS HOSTEL', incharge:, time:'Type String', gender:'BOY or GIRL'}
Response: { success: true, message: 'Room has been created.' }

Validation Rules:
- BOY rooms can only be assigned to BOYS HOSTEL
- GIRL rooms can only be assigned to GIRLS HOSTEL
- Block must be A, B, C, D, E, or F
```

4. `/api/room/:_id` - To delete a room with ID `:_id`
```
Request Type: DELETE
Response: { succes: true, message: 'Room has been deleted.' }
```

### Endpoints for `/api/staff`:

1. `/api/staff/` -  To get all the staff details
```
Request Type: GET
Response: [{name: 'Type String', occupation: 'Type String', mobile: 'type String', isAvailable: 'true or false'}]
```

2. `/api/staff/` - To add new staff
```
Request Type: POST
Request Body: {name: 'Type String', occupation: 'Type String', mobile: 'Type String'}
Response: {name: 'Type String', occupation: 'Type String', mobile: 'Type String', isAvailable: 'true'}
```

3. `/api/staff/availability/:id` - To update staff availability
```
Request Type: PUT
Request Body: {isAvailable: 'true or false'}
Response: { message: 'Staff availability has been updated.', success: true }
```

4. `/api/staff/:id` - To delete a staff with ID `:id`
```
Request Type: DELETE
Response: { success: true, message: 'Staff has been deleted.' }
```

### Note: By default the mongo id for records is also being sent in GET requests.
