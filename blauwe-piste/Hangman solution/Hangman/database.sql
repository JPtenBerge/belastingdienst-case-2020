INSERT INTO Words (Word) VALUES 
('Minimumtemperaturen'),
('Plantaardig'),
('Computermuis'),
('Telefoon'),
('Chihuahua'),
('YouTube'),
('Quasimodo');

GO

CREATE VIEW getRandomWordView AS
	SELECT TOP 1 * FROM Words ORDER BY NEWID();