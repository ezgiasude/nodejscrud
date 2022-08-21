const student = require("../models/student")

const getStudents = ((req, res) => {
    student.find().then((students) => {
        res.json(students);
      }).catch((err) => {
        res.json(err);
      });
})

const createStudent = ((req, res) => {
  var myData = new student(req.body);
  myData.save().then(() => {
          res.json("Kaydetme İşlemi Başarılı.");
      }).catch((err) => {
          res.json("Kaydetme İşleminde Hata Oluştu.");
      });
})

const updateStudent = ((req, res) => {
  var id = req.params.id;

  student.findByIdAndUpdate({"_id": id}, req.body).then((newStudent) => {
      res.json("Güncelleme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Güncelleme İşleminde Hata Oluştu.");
  });
})

const deleteStudent = ((req, res) => {
  var id = req.params.id;

  student.findByIdAndRemove(id).then(() => {
      res.json("Silme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Silme İşleminde Hata Oluştu.");
  });
})


const findStudent=  ((req, res) => {
  var id = req.params.id;

  student.findById(id).then((student) => {
    res.json(student);
  }).catch((err) => {
    res.json(err);
  });
})

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    findStudent
}