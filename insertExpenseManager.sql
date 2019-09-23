-- --------------------------------------------------------

--
-- Dumping data for table `SOCIETY`
--

INSERT INTO `SOCIETY` (`societySiret`, `societyName`) VALUES
('32212091600208', 'ProfenPoche'),
('32773318400516', 'Noowoo'),
('19666874956157', 'Helioparc'),
('42968791600016', 'Total'),
('34741001100063', 'GIFI'),
('41481521700016', 'Safran');

-- --------------------------------------------------------

--
-- Dumping data for table `USER`
--

INSERT INTO `USER` (`userEmail`, `userPassword`, `userType`, `societySiret`) VALUES
('jean.ritz@helioparc.fr', 'JeanR2019', 'commercial', '19666874956157'),
('sam.gates@helioparc.fr', 'Samuel2019', 'commercial', '19666874956157'),
('phillipe.jones@helioparc.fr', 'Phillipe2019', 'commercial', '19666874956157'),
('susan.ramos@helioparc.fr', 'Susan2019', 'commercial', '19666874956157');

-- --------------------------------------------------------

--
-- Dumping data for table `MISSION`
--

INSERT INTO `MISSION` (`missionId`, `missionName`, `userEmail`, `customerId`) VALUES
(1, 'Migration BD', 'jean.ritz@helioparc.fr', 1),
(2, 'Cahier des Charges', 'jean.ritz@helioparc.fr', 2),
(3, 'Instalation logiciel', 'jean.ritz@helioparc.fr', 2),
(4, 'Support Technique', 'jean.ritz@helioparc.fr', 4),
(5, 'Normalisation BD', 'jean.ritz@helioparc.fr', 5),
(6, 'Migration BD', 'sam.gates@helioparc.fr', 7),
(7, 'Cursus RGPD', 'sam.gates@helioparc.fr', 1);

-- --------------------------------------------------------

--
-- Dumping data for table `CUSTOMER `
--

INSERT INTO `CUSTOMER` (`customerId`, `customerLastName`, `customerFirstName`, `societySiret`) VALUES
(1, 'Gates', 'Bill', '32212091600208'),
(2, 'Jobs', 'Steve', '32212091600208'),
(3, 'Thorval', 'Linus', '32212091600208'),
(4, 'Dorff', 'Stephane', '32773318400516'),
(5, 'Labat', 'Jerome', '32773318400516'),
(6, 'Anselmo', 'Philippe', '42968791600016'),
(7, 'Young', 'Andre', '42968791600016'),
(8, 'Andrieu', 'Patrick', '41481521700016'),
(9, 'Suarez', 'Raphael', '41481521700016'),
(10, 'Doux', 'Leyla', '32212091600208');

-- --------------------------------------------------------

--
-- Dumping data for table `EXPENSE`
--

INSERT INTO `EXPENSE` (`expenseId`, `expenseType`, `expenseDate`, `expenseStatus`, `expenseTotal`, `expenseRefounded`, `expenseDepart`, `expenseArrival`, `expenseDistance`, `missionId`) VALUES
(1, 'Essence', '2019-05-16', 'Rembourse', 85, 0, '', '', 0, 2),
(2, 'Hotel', '2019-05-17', 'En attente', 75, 0, '', '', 0, 2),
(3, 'Trajet', '2019-05-16', 'En attente', 180, 0, 'Pau', 'Bayonne', 500, 2),
(4, 'Essence', '2019-04-10', 'En attente', 87, 0, '', '', 0, 4),
(5, 'Essence', '2019-06-10', 'En attente', 31, 0, '', '', 0, 2),
(6, 'Essence', '2019-04-26', 'En attente', 70, 0, '', '', 0, 5),
(7, 'Autres', '2019-04-14', 'En attente', 1800, 0, '', '', 0, 7),
(8, 'Bus', '2019-03-14', 'En attente', 97, 0, '', '', 0, 3);

-- --------------------------------------------------------
