# campus-manager-2.0

# Base url - http://campus-manager-api-v1.herokuapp.com/api/

# Campuses Routes
- campuses/all (GET) -> returns list of all campuses
- campuses/:campus_id (GET) -> returns details about single specific campus
- campuses/ (POST) -> adds campus to db [REQUIRED: name, address] [Optional: image_url, description] (body must be in json)
- campuses/:campus_id (PUT) -> updates specific campus [fields: name, address, image_url, description] *you don't have to update all the fields* (body must be in json)
- campuses/:campus_id (DELETE) -> deletes specific campus

# Students Routes
- students/all (GET) -> returns list of all students
- students/:student_id (GET) -> returns details about single specific student
- students/ (POST) -> adds student to db [REQUIRED: first_name, last_name, email] [Optional: image_url, gpa(must be between 0.0 - 4.0)] (body must be in json)
- students/:student_id (PUT) -> updates specific student [fields: first_name, last_name, image_url, gpa(must be between 0.0 - 4.0)] *you don't have to update all the fields* (body must be in json)
- students/:student_id (DELETE) -> deletes specific student
