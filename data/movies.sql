DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies CHARSET=UTF8;
USE movies;
CREATE TABLE movie(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  title TEXT,
  doctor TEXT,
  language TEXT,
  country TEXT,
  summary TEXT,
  flash TEXT,
  poster TEXT,
  years INT,
  createAt DATE,
  updateAt DATE
)

INSERT INTO movie VALUES(NULL, '绯闻女孩', '斯皮尔伯格', 'english', 'American', '《绯闻女孩》两年内火爆全球，话题女王也因为泰勒·摩森和杰西卡·斯佐尔的时尚蜕变已经由最开始两人扩充到四人的时尚造型秀，各国奢侈品牌单品混搭上身，抢穿天桥新装。美国上东区的富家女集体出击，争当最耀眼的Gossip Queen！', 'https://vdse.bdstatic.com//38ade07af25f275add55f2d16b783291?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F7726333bf113bb21971f85d18b6868d2f75df952197304c8d0215a3507faf001', 'https://img.38xf.com/uploads/20181217/258a0936490b02b51f75e93283abed6c.jpg', '2018', now(), now());