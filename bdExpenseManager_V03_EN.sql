#------------------------------------------------------------
#  Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: SOCIETY
#------------------------------------------------------------

CREATE TABLE SOCIETY(
  societySiret Varchar (50) NOT NULL ,
  societyName Varchar (50) NOT NULL ,
  CONSTRAINT SOCIETY_PK PRIMARY KEY (societySiret)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: USER
#------------------------------------------------------------

CREATE TABLE USER(
  userEmail Varchar (50) NOT NULL ,
  userPassword Varchar (50) NOT NULL ,
  userType Varchar (50) NOT NULL ,
  societySiret Varchar (50) NOT NULL ,
	CONSTRAINT USER_PK PRIMARY KEY (userEmail) ,
  CONSTRAINT USER_SOCIETY_FK FOREIGN KEY (societySiret) REFERENCES SOCIETY(societySiret)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: CUSTOMER
#------------------------------------------------------------

CREATE TABLE CUSTOMER(
  customerId Int Auto_increment NOT NULL ,
  customerLastName Varchar (50) NOT NULL ,
  customerFirstName Varchar (50) NOT NULL ,
  societySiret Varchar (50) NOT NULL ,
	CONSTRAINT CUSTOMER_PK PRIMARY KEY (customerId) ,
  CONSTRAINT CUSTOMER_SOCIETY_FK FOREIGN KEY (societySiret) REFERENCES SOCIETY(societySiret)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: MISSION
#------------------------------------------------------------

CREATE TABLE MISSION(
  missionId Int Auto_increment NOT NULL ,
  missionName Varchar (50) NOT NULL ,
  userEmail Varchar (50) NOT NULL ,
  customerId Int NOT NULL ,
	CONSTRAINT MISSION_PK PRIMARY KEY (missionId) ,
  CONSTRAINT MISSION_USER_FK FOREIGN KEY (userEmail) REFERENCES USER(userEmail) ,
	CONSTRAINT MISSION_CUSTOMER0_FK FOREIGN KEY (customerId) REFERENCES CUSTOMER(customerId)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: EXPENSE
#------------------------------------------------------------

CREATE TABLE EXPENSE(
  expenseId Int Auto_increment NOT NULL ,
  expenseType Varchar (50) NOT NULL ,
  expenseDate Date NOT NULL ,
  expenseStatus Varchar (50) NOT NULL ,
  expenseTotal Float NOT NULL ,
  expenseRefounded  Float NOT NULL ,
  expenseDepart Varchar (50) ,
  expenseArrival Varchar (50) ,
  expenseDistance Float ,
  missionId Int NOT NULL ,
	CONSTRAINT EXPENSE_PK PRIMARY KEY (expenseId) ,
  CONSTRAINT EXPENSE_MISSION_FK FOREIGN KEY (missionId) REFERENCES MISSION(missionId)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: INVOICE
#------------------------------------------------------------

CREATE TABLE INVOICE(
  expenseId Int NOT NULL ,
  invoiceId Int NOT NULL ,
  invoiceImage Varchar (250) NOT NULL ,
	CONSTRAINT INVOICE_PK PRIMARY KEY (expenseId,invoiceId) ,
  CONSTRAINT INVOICE_EXPENSE_FK FOREIGN KEY (expenseId) REFERENCES EXPENSE(expenseId)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Check: expenseDistance
#------------------------------------------------------------

ALTER TABLE EXPENSE
ADD CONSTRAINT CHK_expenseDistance CHECK (expenseDistance>0);

#------------------------------------------------------------
# Default: Status expenseStatus
#------------------------------------------------------------

ALTER TABLE EXPENSE
ALTER expenseStatus SET DEFAULT 'En attente';

#------------------------------------------------------------
# Default: Status expenseRefounded
#------------------------------------------------------------

ALTER TABLE EXPENSE
ALTER expenseRefounded SET DEFAULT 0;

#------------------------------------------------------------
# View: listexpensescommercial
#------------------------------------------------------------

CREATE VIEW listexpensescommercial AS SELECT e.expenseId, e.expenseType, e.expenseDate, e.expenseStatus, e.expenseTotal, e.expenseRefounded, e.expenseDepart, e.expenseArrival, e.expenseDistance, m.missionId, m.missionName, c.customerFirstName, c.customerLastName, s.societyName, m.userEmail
FROM expense AS e INNER JOIN mission AS m on e.missionId = m.missionId INNER JOIN customer AS c ON m.customerId = c.customerId INNER JOIN society AS s ON c.societySiret = s.societySiret


#------------------------------------------------------------
# View: listMissionCustomerSociety
#------------------------------------------------------------

CREATE VIEW listMissionCustomerSociety AS SELECT c.customerID, c.customerLastName, c.customerFirstName, c.societySiret, m.missionId, m.missionName, m.userEmail, s.societyName
FROM MISSION as m INNER JOIN CUSTOMER as c ON m.customerId=c.customerId INNER JOIN SOCIETY as s ON c.societySiret=s.societySiret
