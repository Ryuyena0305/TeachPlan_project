drop database if exists springweb;
create database  springweb;
use  springweb;

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


insert into teacher (tname, tbirth, tphone,id,pwd) values ('류리나', '1998-12-19', '010-7758-1234','heart','1219');
insert into teacher (tname, tbirth, tphone,id,pwd) values ('류예나', '2001-03-05', '010-2588-1234','bear','0305');


insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('오원석','010-1111-1111','010-1111-1112','야탑고등학교','3',2,1,'예체능');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('정준재','010-1111-1113','010-1111-1114','강릉고등학교','3',2,1,'학부모 1달 1상담');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('박성한','010-1111-1115','010-1111-1116','효천고등학교','1',1,1,'수요일 영어학원 시간 17:00~19:00');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('최지훈','010-1111-1117','010-1111-1118','제일고등학교','2',1,1,'숙제 많이 내주길 원함');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('박지환','010-1111-1119','010-1111-1110','세광고등학교','3',1,1,'수행평가 질문 많음');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('조병현','010-1111-2222','010-1111-2223','온양중학교','1',2,1,'');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('김민','010-1111-2224','010-1111-2225','설화중','2',1,1,'');
insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote) values
('김성현','010-1111-2227','010-1111-2228','설화중','3',2,0,'');



insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(1,'월','20:00:00','22:00:00',1),(1,'수','20:00:00','22:00:00',1),(1,'금','20:00:00','22:00:00',1);
insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(2,'화','20:00:00','22:00:00',1),(2,'목','20:00:00','22:00:00',1);
insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(3,'화','18:00:00','20:00:00',1),(3,'목','18:00:00','20:00:00',1);
insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(4,'화','18:00:00','20:00:00',1),(3,'목','18:00:00','20:00:00',1);
insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(5,'월','18:00:00','20:00:00',1),(5,'수','20:00:00','22:00:00',1),(5,'금','20:00:00','22:00:00',1);
insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(6,'월','16:00:00','18:00:00',1),(5,'수','16:00:00','18:00:00',1),(5,'금','16:00:00','18:00:00',1);
insert into lecture(stnum,week,starttime,endtime,lecturetype) values
(7,'화','16:00:00','18:00:00',1),(7,'목','16:00:00','18:00:00',1);


insert into homework(stnum,progress,textbook,page,done) values
(1,'삼차함수 그래프의 활용','라이트 쎈2','110~115',0);
insert into homework(stnum,progress,textbook,page,done) values
(2,'삼차함수 그래프의 활용','라이트 쎈2','110~116',0);
insert into homework(stnum,progress,textbook,page,done) values
(3,'삼각비','쎈2','80~88',0);
insert into homework(stnum,progress,textbook,page,done) values
(4,'행렬의 기본','수학의 정석','66~57',1);
insert into homework(stnum,progress,textbook,page,done) values
(5,'삼차함수의 미분','풍산자','40~43',1);
insert into homework(stnum,progress,textbook,page,done) values
(5,'삼차함수의 미분','풍산자','49~52',0);
