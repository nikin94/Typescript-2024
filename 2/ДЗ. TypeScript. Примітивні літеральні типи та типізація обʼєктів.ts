interface Lecturer {
  id: string | number
  name: string
  surname: string
  position: string
  company: string
  experience: number
  courses: string[]
  contacts: string
}

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: Area[] = []
  private _lecturers: Lecturer[] = [] // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
    return this._areas
  }

  get lecturers(): Lecturer[] {
    return this._lecturers
  }

  addArea(area: Area) {
    this._areas.push(area)
  }

  removeArea(areaName: string) {
    this._areas = this._areas.filter(area => area.getName() !== areaName)
  }

  addLecturer(lecturer: Lecturer) {
    this._lecturers.push(lecturer)
  }

  removeLecturer(lecturerId: string | number) {
    this._lecturers = this._lecturers.filter(lecturer => lecturer.id !== lecturerId)
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Level[] = []
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  getName() {
    return this._name
  }

  getLevels(): Level[] {
    return this._levels
  }

  getLevelByName(levelName: string): Level | undefined {
    return this._levels.find(level => level.getName() === levelName)
  }

  addLevel(level: Level) {
    this._levels.push(level)
  }

  removeLevel(levelName: string) {
    this._levels = this._levels.filter(level => level.getName() !== levelName)
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: Group[] = []
  private _name: string
  private _description: string

  constructor(name, description) {
    this._name = name
    this._description = description
  }

  getGroups(): Group[] {
    return this._groups
  }

  getGroupByAreaName(groupAreaName: string): Group | undefined {
    return this._groups.find(group => group.getArea().getName() === groupAreaName)
  }

  getName(): string {
    return this._name
  }

  getDescription(): string {
    return this._description
  }

  addGroup(group: Group) {
    this._groups.push(group)
  }

  removeGroupByDirectionName(groupDirectionName: string) {
    this._groups = this._groups.filter(group => group.getDirectionName() !== groupDirectionName)
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: Area
  private _status: string
  private _students: Student[] = [] // Modify the array so that it has a valid toSorted method*
  private _directionName: string
  private _levelName: string

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName
    this._levelName = levelName
  }

  getArea(): Area {
    return this._area
  }

  getStatus(): string {
    return this._status
  }

  getStudents(): Student[] {
    return this._students
  }

  getStudentByFullName(fullName: string): Student | undefined {
    return this._students.find(student => student.fullName === fullName)
  }

  getDirectionName(): string {
    return this._directionName
  }

  getLevelName(): string {
    return this._levelName
  }

  addStudent(student: Student) {
    this._students.push(student)
  }

  removeStudentByFullName(fullName: string): boolean {
    const student = this._students.find(student => student.fullName === fullName)
    if (!student) return false

    this._students = this._students.filter(student => student.fullName !== fullName)
    return true
  }

  setsStatus(status: string) {
    this._status = status
  }

  showPerformance() {
    const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating())
    return sortedStudents
  }
}

interface Grade {
  workName: string
  mark: number
}

interface Visit {
  lesson: string
  date: Date
}
class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string
  private _lastName: string
  private _birthYear: number
  private _grades: Grade[] = [] // workName: mark
  private _visits: Visit[] = [] // lesson: present

  constructor(firstName, lastName, birthYear) {
    this._firstName = firstName
    this._lastName = lastName
    this._birthYear = birthYear
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`
  }

  set fullName(value) {
    ;[this._lastName, this._firstName] = value.split(' ')
  }

  get age() {
    return new Date().getFullYear() - this._birthYear
  }

  getPerformanceRating() {
    // const gradeValues = Object.values(this._grades)
    const gradeValues = this._grades.map(grade => grade.mark)

    if (!gradeValues.length) return 0

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length
    const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100

    return (averageGrade + attendancePercentage) / 2
  }

  setGrade(workName: string, mark: number) {
    this._grades.push({ workName, mark })
  }

  setVisit(lesson: string, date: Date) {
    this._visits.push({ lesson, date })
  }
}
