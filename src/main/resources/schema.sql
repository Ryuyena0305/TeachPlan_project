create table teacher(
	tnum int unsigned auto_increment,
    tname varchar(20) not null,
    tbirth date not null,
    tphone varchar(13) unique not null,
    tnote varchar(200) ,
    id varchar(15) not null unique,
    pwd varchar(15) not null,
    constraint primary key (tnum)
);

create table student(
	stnum int unsigned auto_increment,
    stname varchar(20) not null,
	stphone varchar(13) unique not null,
    pphone varchar(13) unique not null,
    stschool varchar(20),
    stgrade int ,
    tnum int unsigned,
    ststate boolean default 1,
    stnote varchar(1000),
    constraint primary key (stnum),
    constraint foreign key (tnum) references teacher(tnum)
);

create table lecture(
	lnum int unsigned auto_increment,
    stnum int unsigned not null,
    week varchar(10) not null,
    starttime time not null,
    endtime time not null,
    lecturetype boolean default 1,
    constraint primary key (lnum),
      constraint foreign key (stnum) references student(stnum)
);

create table homework(
	lognum int unsigned auto_increment,
    stnum int unsigned not null,
    progress varchar(100) not null,
    textbook varchar(20) not null,
    page varchar(30) not null,
    done boolean default 0 ,
    constraint primary key (lognum),
	constraint foreign key (stnum) references student(stnum)
);