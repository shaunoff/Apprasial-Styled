import jsPDF from 'jspdf'

export default function pdfReview(data,type){

var logo = "data:image/png;base64,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"
var avatar = "data:image/png;base64,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"
let doc = new jsPDF('p', 'mm', 'letter')
let height = 15
doc.setFont('Helvetica');


let {profile,currentAppraisal} = data
let {firstName,lastName,email} = profile
let {targets,comments} = currentAppraisal
let assessor
currentAppraisal.lead !== null ? assessor = {
  firstName: currentAppraisal.leadFirstName,
  lastName: currentAppraisal.leadLastName
} : assessor = {
  firstName: currentAppraisal.managerFirstName,
  lastName: currentAppraisal.managerLastName
}

let managerName = `${currentAppraisal.managerFirstName} ${currentAppraisal.managerLastName}`

let leadName = `${currentAppraisal.leadFirstName} ${currentAppraisal.leadLastName}`

//Comp function
function centeredSection(text,x, y, width) {
var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
var textOffset = x+((width - textWidth) / 2);
doc.text(textOffset, y, text);
}

function centeredText(text, y) {
var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
doc.text(textOffset, y, text);
}
function section(empComment,manComment,height,empRating,manRating) {

  //Rating
  function rating(width,rating){
    for (let i = 0; i<5; i++) {
      doc.setTextColor(255,	255, 255).setFontSize(12).setFontType('bold');
      if (rating-1 >= i) {
        doc.setDrawColor(0,118,129);
        doc.setFillColor(0,118,129);
      }
      else {
        doc.setDrawColor(220,	220, 220);
        doc.setFillColor(220,	220, 220);
      }
      doc.circle((width+(i*8)),height+11,3,'FD');
      doc.text(`${i+1}`, ((width-1.2)+(i*8)), height+12.5);
    }
  }
  rating(13, empRating)
  rating(113, manRating)
  //Rectangle
  doc.setDrawColor(204,	204, 204);
  doc.setLineWidth(0.6)
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(10, height+17, 93, 31, 3, 3, 'FD');
  doc.roundedRect(110, height+17, 93, 31, 3, 3, 'FD');
  doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
  doc.text(`${firstName} wrote:`, 12, height+21)
  doc.text(`${assessor.firstName} wrote:`, 112, height+21)
  doc.setTextColor(80, 80, 80).setFontSize(10).setFontType('normal')
  let empLines = doc.splitTextToSize(empComment, 88);
  let manLines = doc.splitTextToSize(manComment, 88);
  doc.text(empLines, 12, height+25)
  doc.text(manLines, 112, height+25)
}
function target(target, targetNumber) {
  //Rectangle
  doc.setDrawColor(204,	204, 204);
  doc.setLineWidth(0.6)
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(10, height+5, 193, 31, 3, 3, 'FD');
  doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
  doc.text(`Target ${targetNumber}:`, 12, height+9)
  doc.setTextColor(80, 80, 80).setFontSize(10).setFontType('normal')
  let targetLines = doc.splitTextToSize(target, 190);
  doc.text(targetLines, 12, height+13)

}
function comment(comments) {
  //Rectangle
  doc.setDrawColor(204,	204, 204);
  doc.setLineWidth(0.6)
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(10, height+5, 193, 31, 3, 3, 'FD');
  doc.setTextColor(80, 80, 80).setFontSize(10).setFontType('normal')
  let targetLines = doc.splitTextToSize(comments, 190);
  doc.text(targetLines, 12, height+13)

}
function summaryCont(empComment,manComment,height,empRating,manRating) {

  //Rating
  function rating(width,rating){
    for (let i = 0; i<5; i++) {
      doc.setTextColor(255,	255, 255).setFontSize(12).setFontType('bold');
      if (rating-1 >= i) {
        doc.setDrawColor(0,118,129);
        doc.setFillColor(0,118,129);
      }
      else {
        doc.setDrawColor(220,	220, 220);
        doc.setFillColor(220,	220, 220);
      }
      doc.circle((width+(i*8)),height+11,3,'FD');
      doc.text(`${i+1}`, ((width-1.2)+(i*8)), height+12.5);
    }
  }
  rating(13, empRating)
  doc.setDrawColor(204,	204, 204);
  doc.setLineWidth(0.6)
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(10, height+17, 193, 31, 3, 3, 'FD');
  doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
  doc.text(`${firstName} wrote:`, 12, height+21)
  doc.setTextColor(80, 80, 80).setFontSize(10).setFontType('normal')
  let empLines = doc.splitTextToSize(empComment, 190);
  doc.text(empLines, 12, height+25)
  height+=45
  rating(13, manRating)
  doc.setDrawColor(204,	204, 204);
  doc.setLineWidth(0.6)
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(10, height+17, 193, 31, 3, 3, 'FD');
  doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
  doc.text(`${assessor.firstName} wrote:`, 12, height+21)
  doc.setTextColor(80, 80, 80).setFontSize(10).setFontType('normal')
  let manLines = doc.splitTextToSize(manComment, 190);
  doc.text(manLines, 12, height+25)

}
//Header


let {competencies,achievements,summary} = currentAppraisal


doc.addImage(logo,'png',102,5,10,10)
doc.setTextColor(0,118,129).setFontSize(16).setFontType('bold')

centeredText('Performance Review',20)
doc.setTextColor(0,118,129).setFontSize(14).setFontType('bold')
doc.text(firstName, 30, 32)
doc.text(lastName, 30, 38)
doc.setTextColor(190,190,190).setFontSize(12).setFontType('normal')
doc.text(email, 30, 44)
doc.setTextColor(190,190,190).setFontSize(12).setFontType('normal')
doc.text('Period:', 110, 32)
doc.text('Manager:', 110, 38)
doc.text('Lead:', 110, 44)
doc.setTextColor(0,118,129).setFontType('bold')
doc.text('Mar 2017 - Mar 2018', 133, 32)
doc.text(managerName, 133, 38)
doc.text(currentAppraisal.lead === null ? "" : leadName, 133, 44)

// draw lines
doc.setDrawColor(190, 190, 190)
doc.setLineWidth(0.6)
doc.line(10, 48, 202, 48)
doc.line(10, 25, 202, 25)
//Avatar
doc.addImage(avatar,'png',10,28,17,17)
height+=40
doc.setTextColor(107,173,167).setFontSize(14).setFontType('bold')
doc.text('Competencies', 10, height)
height+=5

employee  = competencies.employee

manager = competencies.manager
//1. Communications Heading
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('1. Communication', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('Ability to explain, convince and be understood  in  oral  and  written  communications  with', 45, height)
doc.text('employees and clients at all levels.', 10, height+5)

section(employee.commComment,manager.commComment,60,employee.commRating,manager.commRating,)
//2. Communications Heading
height+=55
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('2. Cooperation', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('Ability to demonstrate a spirit of willingness and interest when working with superiors,', 40, height)
doc.text('co-workers and clients.', 10, height+5)

section(employee.coopComment,manager.coopComment,115,employee.coopRating,manager.coopRating)

//3. Judgement Heading
height+=55
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('3. Judgement and Inititaive', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('Ability to identify and appropriately solve or refer problems. Willingness to expand', 60, height)
doc.text('responsibilities.', 10, height+5)

section(employee.judgeComment,manager.judgeComment,170,employee.judgeRating,manager.judgeRating)

//4. Time Management Heading
height+=55
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('4. Time Management', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('Ability to organize time effectively. Also consider ability to set priorities, anticipate', 50, height)
doc.text('problems, estimate time requirements and meet deadlines.', 10, height+5)

section(employee.timeComment,manager.timeComment,225,employee.timeRating,manager.timeRating)


//New Page
doc.addPage();
height=10
doc.setTextColor(107,173,167).setFontSize(14).setFontType('bold')
doc.text('Achievements', 10, height+5)
height+=10
//Achievements
employee  = achievements.employee
manager = achievements.manager
//1. Accomplishments
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('1. Accomplishments', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('How would you rate the accomplishments achieved over the last year? Describe the ', 55, height)
doc.text('biggest contributing factors to that rating', 10, height+5)

section(employee.accompComment,manager.accompComment,20,employee.accompRating,manager.accompRating)
//2. professional Development
height+=55
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('2. Professional Development', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('What level of professional development has been achieved this year?', 65, height)
doc.text('Describe the steps taken.', 10, height+5)

section(employee.develComment,manager.develComment,75,employee.develRating,manager.develRating)
//3. Communications Heading
height+=55
doc.setTextColor(107,173,167).setFontSize(10).setFontType('bold')
doc.text('3. Personal Goals', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('How well did you accomplish your goals this year? Describe how you achieved them.', 45, height)

section(employee.goalsComment,manager.goalsComment,125,employee.goalsRating,manager.goalsRating)
//Summary
height+=55
employee = summary.employee
manager = summary.manager
doc.setTextColor(107,173,167).setFontSize(14).setFontType('bold')
doc.text('Overall Summary', 10, height)
doc.setTextColor(190,	190, 190).setFontSize(10).setFontType('bold')
doc.text('Describe your overall achievements this year', 65, height)
summaryCont(employee.summaryComment,manager.summaryComment,180,employee.summaryRating,manager.summaryRating)
let t
if (type=="managerReview" || type == "presidentReview" || type == "final"){
    doc.addPage();
    height = 20
    doc.setTextColor(107,173,167).setFontSize(14).setFontType('bold')
    doc.text('Targets', 10, height)
    target(targets.target1, "1")
    height+=35
    target(targets.target2, "2")
    height+=35
    target(targets.target3, "3")
}
if (type == "presidentReview" || type == "final"){
  if(currentAppraisal.lead !== null){
    height+=50
    doc.setTextColor(107,173,167).setFontSize(14).setFontType('bold')
    doc.text('Senior Manager Review', 10, height)
    comment(comments.manager, "1")
    }

}
doc.save(`${firstName}${lastName}Appraisal.pdf`)
}
