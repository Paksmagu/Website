SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `Donators` CASCADE;
DROP TABLE IF EXISTS `Notes` CASCADE;
CREATE TABLE `Donators`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`note_id` INT NOT NULL,
	`donation_text` TEXT NOT NULL,
	CONSTRAINT `PK_Donators` PRIMARY KEY (`id` ASC)
);

CREATE TABLE `Notes`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`note` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_Notes` PRIMARY KEY (`id` ASC)
);

ALTER TABLE `Donators`
 ADD INDEX `IXFK_Donators_Notes` (`note_id` ASC);

ALTER TABLE `Donators`
 ADD CONSTRAINT `FK_Donators_Notes`
	FOREIGN KEY (`note_id`) REFERENCES `Notes` (`id`) ON DELETE Restrict ON UPDATE Restrict;

SET FOREIGN_KEY_CHECKS=1;

insert into Notes (note)values ('C2');
insert into Notes (note)values ('D2');
insert into Notes (note)values ('E2');
insert into Notes (note)values ('F2');
insert into Notes (note)values ('G2');
insert into Notes (note)values ('G2');
insert into Notes (note)values ('A2');
insert into Notes (note)values ('B2');
insert into Notes (note)values ('C#2');
insert into Notes (note)values ('D#2');
insert into Notes (note)values ('F#2');
insert into Notes (note)values ('G#2');
insert into Notes (note)values ('A#2');

insert into Notes (note)values ('C3');
insert into Notes (note)values ('D3');
insert into Notes (note)values ('E3');
insert into Notes (note)values ('F3');
insert into Notes (note)values ('G3');
insert into Notes (note)values ('G3');
insert into Notes (note)values ('A3');
insert into Notes (note)values ('B3');
insert into Notes (note)values ('C#3');
insert into Notes (note)values ('D#3');
insert into Notes (note)values ('F#3');
insert into Notes (note)values ('G#3');
insert into Notes (note)values ('A#3');

insert into Notes (note)values ('C4');
insert into Notes (note)values ('D4');
insert into Notes (note)values ('E4');
insert into Notes (note)values ('F4');
insert into Notes (note)values ('G4');
insert into Notes (note)values ('G4');
insert into Notes (note)values ('A4');
insert into Notes (note)values ('B4');
insert into Notes (note)values ('C#4');
insert into Notes (note)values ('D#4');
insert into Notes (note)values ('F#4');
insert into Notes (note)values ('G#4');
insert into Notes (note)values ('A#4');

insert into Notes (note)values ('C5');
insert into Notes (note)values ('D5');
insert into Notes (note)values ('E5');
insert into Notes (note)values ('F5');
insert into Notes (note)values ('G5');
insert into Notes (note)values ('G5');
insert into Notes (note)values ('A5');
insert into Notes (note)values ('B5');
insert into Notes (note)values ('C#5');
insert into Notes (note)values ('D#5');
insert into Notes (note)values ('F#5');
insert into Notes (note)values ('G#5');
insert into Notes (note)values ('A#5');

insert into Notes (note)values ('C6');
insert into Notes (note)values ('D6');
insert into Notes (note)values ('E6');
insert into Notes (note)values ('F6');
insert into Notes (note)values ('G6');
insert into Notes (note)values ('G6');
insert into Notes (note)values ('A6');
insert into Notes (note)values ('B6');
insert into Notes (note)values ('C#6');
insert into Notes (note)values ('D#6');
insert into Notes (note)values ('F#6');
insert into Notes (note)values ('G#6');
insert into Notes (note)values ('A#6');

insert into Notes (note)values ('AChord major 2');
insert into Notes (note)values ('AChord minor 2');
insert into Notes (note)values ('CChord major 2');
insert into Notes (note)values ('CChord minor 2');
insert into Notes (note)values ('DChord major 2');
insert into Notes (note)values ('DChord minor 2');
insert into Notes (note)values ('EChord major 2');
insert into Notes (note)values ('EChord minor 2');
insert into Notes (note)values ('FChord major 2');
insert into Notes (note)values ('FChord minor 2');
insert into Notes (note)values ('GChord major 2');
insert into Notes (note)values ('GChord minor 2');

insert into Notes (note)values ('AChord major 3');
insert into Notes (note)values ('AChord minor 3');
insert into Notes (note)values ('CChord major 3');
insert into Notes (note)values ('CChord minor 3');
insert into Notes (note)values ('DChord major 3');
insert into Notes (note)values ('DChord minor 3');
insert into Notes (note)values ('EChord major 3');
insert into Notes (note)values ('EChord minor 3');
insert into Notes (note)values ('FChord major 3');
insert into Notes (note)values ('FChord minor 3');
insert into Notes (note)values ('GChord major 3');
insert into Notes (note)values ('GChord minor 3');

insert into Notes (note)values ('AChord major 4');
insert into Notes (note)values ('AChord minor 4');
insert into Notes (note)values ('CChord major 4');
insert into Notes (note)values ('CChord minor 4');
insert into Notes (note)values ('DChord major 4');
insert into Notes (note)values ('DChord minor 4');
insert into Notes (note)values ('EChord major 4');
insert into Notes (note)values ('EChord minor 4');
insert into Notes (note)values ('FChord major 4');
insert into Notes (note)values ('FChord minor 4');
insert into Notes (note)values ('GChord major 4');
insert into Notes (note)values ('GChord minor 4');

insert into Notes (note)values ('AChord major 5');
insert into Notes (note)values ('AChord minor 5');
insert into Notes (note)values ('CChord major 5');
insert into Notes (note)values ('CChord minor 5');
insert into Notes (note)values ('DChord major 5');
insert into Notes (note)values ('DChord minor 5');
insert into Notes (note)values ('EChord major 5');
insert into Notes (note)values ('EChord minor 5');
insert into Notes (note)values ('FChord major 5');
insert into Notes (note)values ('FChord minor 5');
insert into Notes (note)values ('GChord major 5');
insert into Notes (note)values ('GChord minor 5');

insert into Notes (note)values ('AChord major 6');
insert into Notes (note)values ('AChord minor 6');
insert into Notes (note)values ('CChord major 6');
insert into Notes (note)values ('CChord minor 6');
insert into Notes (note)values ('DChord major 6');
insert into Notes (note)values ('DChord minor 6');
insert into Notes (note)values ('EChord major 6');
insert into Notes (note)values ('EChord minor 6');
insert into Notes (note)values ('FChord major 6');
insert into Notes (note)values ('FChord minor 6');
insert into Notes (note)values ('GChord major 6');
insert into Notes (note)values ('GChord minor 6');

insert into Donators (first_name, last_name, email, note_id, donation_text) VALUES ('Martin', 'Ojamets','ojametsmartin@gmail.com',27, 'Õnnitlused Dj.UjaMetsa poolt! Tulgu järgmine 100 ka!');
insert into Donators (first_name, last_name, email, note_id, donation_text) VALUES ('Natalija', 'Tomazic','talija@gmail.com',28, 'Happy Birthday!');
insert into Donators (first_name, last_name, email, note_id, donation_text) VALUES ('bobo', 'ross','zappyBoi@gmail.com',12, 'I won the Lottery');
insert into Donators (first_name, last_name, email, note_id, donation_text) VALUES ('Geeza', 'Shaman','zappyBoi2@gmail.com',90, 'Hanging out with the mates!');