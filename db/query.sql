-- just some queries used during development to check query correctnes

SELECT * FROM bpk;

SELECT id FROM bpk WHERE pnr = '1' ORDER BY id DESC LIMIT 1;

DELETE FROM bpk WHERE id = (SELECT id FROM bpk WHERE pnr = '1' ORDER BY id DESC LIMIT 1);
