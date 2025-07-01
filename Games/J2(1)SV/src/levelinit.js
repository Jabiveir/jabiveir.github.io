import Blocks from "./blocks.js";
import Enemies from "./enemy.js";

export default class LevelInit {
	LevelSetup(Levels) {
		let BlockList = [];
		let L1Block1 = new Blocks(4, 1, "Block");
		let L1Block2 = new Blocks(5, 1, "Block");
		let L1Block3 = new Blocks(6, 1, "Block");
		let L1Block4 = new Blocks(8, 1, "Block");
		let L1Block5 = new Blocks(9, 1, "Block");
		let L1Block6 = new Blocks(10, 1, "Block");
		let L1Block7 = new Blocks(12, 1, "Block");
		let L1Block8 = new Blocks(13, 1, "Block");
		let L1Block9 = new Blocks(14, 1, "Block");
		let L1Block10 = new Blocks(16, 1, "Block");
		let L1Block11 = new Blocks(17, 1, "Block");
		let L1Block12 = new Blocks(18, 1, "Block");
		let L1Block13 = new Blocks(20, 1, "Block");
		let L1Block14 = new Blocks(24, 1, "Block");
		let L1Block15 = new Blocks(4, 2, "Block");
		let L1Block16 = new Blocks(6, 2, "Block");
		let L1Block17 = new Blocks(8, 2, "Block");
		let L1Block18 = new Blocks(10, 2, "Block");
		let L1Block19 = new Blocks(12, 2, "Block");
		let L1Block20 = new Blocks(14, 2, "Block");
		let L1Block21 = new Blocks(16, 2, "Block");
		let L1Block22 = new Blocks(18, 2, "Block");
		let L1Block23 = new Blocks(20, 2, "Block");
		let L1Block24 = new Blocks(24, 2, "Block");
		let L1Block25 = new Blocks(4, 3, "Block");
		let L1Block26 = new Blocks(5, 3, "Block");
		let L1Block27 = new Blocks(6, 3, "Block");
		let L1Block28 = new Blocks(8, 3, "Block");
		let L1Block29 = new Blocks(9, 3, "Block");
		let L1Block30 = new Blocks(10, 3, "Block");
		let L1Block31 = new Blocks(12, 3, "Block");
		let L1Block32 = new Blocks(13, 3, "Block");
		let L1Block33 = new Blocks(14, 3, "Block");
		let L1Block34 = new Blocks(16, 3, "Block");
		let L1Block35 = new Blocks(18, 3, "Block");
		let L1Block36 = new Blocks(20, 3, "Block");
		let L1Block37 = new Blocks(22, 3, "Block");
		let L1Block38 = new Blocks(24, 3, "Block");
		let L1Block39 = new Blocks(4, 4, "Block");
		let L1Block40 = new Blocks(6, 4, "Block");
		let L1Block41 = new Blocks(8, 4, "Block");
		let L1Block42 = new Blocks(9, 4, "Block");
		let L1Block43 = new Blocks(12, 4, "Block");
		let L1Block44 = new Blocks(13, 4, "Block");
		let L1Block45 = new Blocks(16, 4, "Block");
		let L1Block46 = new Blocks(18, 4, "Block");
		let L1Block47 = new Blocks(20, 4, "Block");
		let L1Block48 = new Blocks(22, 4, "Block");
		let L1Block49 = new Blocks(24, 4, "Block");
		let L1Block50 = new Blocks(4, 5, "Block");
		let L1Block51 = new Blocks(6, 5, "Block");
		let L1Block52 = new Blocks(8, 5, "Block");
		let L1Block53 = new Blocks(10, 5, "Block");
		let L1Block54 = new Blocks(12, 5, "Block");
		let L1Block55 = new Blocks(14, 5, "Block");
		let L1Block56 = new Blocks(16, 5, "Block");
		let L1Block57 = new Blocks(17, 5, "Block");
		let L1Block58 = new Blocks(18, 5, "Block");
		let L1Block59 = new Blocks(20, 5, "Block");
		let L1Block60 = new Blocks(21, 5, "Block");
		let L1Block61 = new Blocks(22, 5, "Block");
		let L1Block62 = new Blocks(23, 5, "Block");
		let L1Block63 = new Blocks(24, 5, "Block");
		let L1Block64 = new Blocks(7, 7, "Block");
		let L1Block65 = new Blocks(9, 7, "Block");
		let L1Block66 = new Blocks(11, 7, "Block");
		let L1Block67 = new Blocks(12, 7, "Block");
		let L1Block68 = new Blocks(13, 7, "Block");
		let L1Block69 = new Blocks(15, 7, "Block");
		let L1Block70 = new Blocks(17, 7, "Block");
		let L1Block71 = new Blocks(19, 7, "Block");
		let L1Block72 = new Blocks(20, 7, "Block");
		let L1Block73 = new Blocks(21, 7, "Block");
		let L1Block74 = new Blocks(7, 8, "Block");
		let L1Block75 = new Blocks(9, 8, "Block");
		let L1Block76 = new Blocks(11, 8, "Block");
		let L1Block77 = new Blocks(15, 8, "Block");
		let L1Block78 = new Blocks(17, 8, "Block");
		let L1Block79 = new Blocks(19, 8, "Block");
		let L1Block80 = new Blocks(7, 9, "Block");
		let L1Block81 = new Blocks(8, 9, "Block");
		let L1Block82 = new Blocks(11, 9, "Block");
		let L1Block83 = new Blocks(12, 9, "Block");
		let L1Block84 = new Blocks(15, 9, "Block");
		let L1Block85 = new Blocks(16, 9, "Block");
		let L1Block86 = new Blocks(17, 9, "Block");
		let L1Block87 = new Blocks(19, 9, "Block");
		let L1Block88 = new Blocks(20, 9, "Block");
		let L1Block89 = new Blocks(21, 9, "Block");
		let L1Block90 = new Blocks(7, 10, "Block");
		let L1Block91 = new Blocks(9, 10, "Block");
		let L1Block92 = new Blocks(11, 10, "Block");
		let L1Block93 = new Blocks(16, 10, "Block");
		let L1Block94 = new Blocks(21, 10, "Block");
		let L1Block95 = new Blocks(7, 11, "Block");
		let L1Block96 = new Blocks(9, 11, "Block");
		let L1Block97 = new Blocks(11, 11, "Block");
		let L1Block98 = new Blocks(12, 11, "Block");
		let L1Block99 = new Blocks(13, 11, "Block");
		let L1Block100 = new Blocks(16, 11, "Block");
		let L1Block101 = new Blocks(19, 11, "Block");
		let L1Block102 = new Blocks(20, 11, "Block");
		let L1Block103 = new Blocks(21, 11, "Block");
		let L1Flag = new Blocks(28, 1, "Flag");
		BlockList.push([
			L1Block1,
			L1Block2,
			L1Block3,
			L1Block4,
			L1Block5,
			L1Block6,
			L1Block7,
			L1Block8,
			L1Block9,
			L1Block10,
			L1Block11,
			L1Block12,
			L1Block13,
			L1Block14,
			L1Block15,
			L1Block16,
			L1Block17,
			L1Block18,
			L1Block19,
			L1Block20,
			L1Block21,
			L1Block22,
			L1Block23,
			L1Block24,
			L1Block25,
			L1Block26,
			L1Block27,
			L1Block28,
			L1Block29,
			L1Block30,
			L1Block31,
			L1Block32,
			L1Block33,
			L1Block34,
			L1Block35,
			L1Block36,
			L1Block37,
			L1Block38,
			L1Block39,
			L1Block40,
			L1Block41,
			L1Block42,
			L1Block43,
			L1Block44,
			L1Block45,
			L1Block46,
			L1Block47,
			L1Block48,
			L1Block49,
			L1Block50,
			L1Block51,
			L1Block52,
			L1Block53,
			L1Block54,
			L1Block55,
			L1Block56,
			L1Block57,
			L1Block58,
			L1Block59,
			L1Block60,
			L1Block61,
			L1Block62,
			L1Block63,
			L1Block64,
			L1Block65,
			L1Block66,
			L1Block67,
			L1Block68,
			L1Block69,
			L1Block70,
			L1Block71,
			L1Block72,
			L1Block73,
			L1Block74,
			L1Block75,
			L1Block76,
			L1Block77,
			L1Block78,
			L1Block79,
			L1Block80,
			L1Block81,
			L1Block82,
			L1Block83,
			L1Block84,
			L1Block85,
			L1Block86,
			L1Block87,
			L1Block88,
			L1Block89,
			L1Block90,
			L1Block91,
			L1Block92,
			L1Block93,
			L1Block94,
			L1Block95,
			L1Block96,
			L1Block97,
			L1Block98,
			L1Block99,
			L1Block100,
			L1Block101,
			L1Block102,
			L1Block103,
			L1Flag
		]);
		let L2Flag = new Blocks(28, 1, "Flag");
		BlockList.push([L2Flag]);
		let L3Block1 = new Blocks(7, 0, "Block");
		let L3Block2 = new Blocks(15, 0, "Block");
		let L3Block3 = new Blocks(23, 0, "Block");
		let L3Block4 = new Blocks(7, 1, "Block");
		let L3Block5 = new Blocks(15, 1, "Block");
		let L3Block6 = new Blocks(23, 1, "Block");
		let L3Block7 = new Blocks(7, 2, "Block");
		let L3Block8 = new Blocks(15, 2, "Block");
		let L3Block9 = new Blocks(23, 2, "Block");
		let L3Block10 = new Blocks(3, 3, "Block");
		let L3Block11 = new Blocks(7, 3, "Block");
		let L3Block12 = new Blocks(11, 3, "Block");
		let L3Block13 = new Blocks(15, 3, "Block");
		let L3Block14 = new Blocks(19, 3, "Block");
		let L3Block15 = new Blocks(23, 3, "Block");
		let L3Block16 = new Blocks(27, 3, "Block");
		let L3Block17 = new Blocks(28, 3, "Block");
		let L3Block18 = new Blocks(29, 3, "Block");
		let L3Block19 = new Blocks(3, 4, "Block");
		let L3Block20 = new Blocks(7, 4, "Block");
		let L3Block21 = new Blocks(11, 4, "Block");
		let L3Block22 = new Blocks(15, 4, "Block");
		let L3Block23 = new Blocks(19, 4, "Block");
		let L3Block24 = new Blocks(23, 4, "Block");
		let L3Block25 = new Blocks(27, 4, "Block");
		let L3Block26 = new Blocks(28, 4, "Block");
		let L3Block27 = new Blocks(29, 4, "Block");
		let L3Block28 = new Blocks(3, 5, "Block");
		let L3Block29 = new Blocks(7, 5, "Block");
		let L3Block30 = new Blocks(11, 5, "Block");
		let L3Block31 = new Blocks(15, 5, "Block");
		let L3Block32 = new Blocks(19, 5, "Block");
		let L3Block33 = new Blocks(23, 5, "Block");
		let L3Block34 = new Blocks(27, 5, "Block");
		let L3Block35 = new Blocks(28, 5, "Block");
		let L3Block36 = new Blocks(29, 5, "Block");
		let L3Block37 = new Blocks(3, 6, "Block");
		let L3Block38 = new Blocks(7, 6, "Block");
		let L3Block39 = new Blocks(11, 6, "Block");
		let L3Block40 = new Blocks(15, 6, "Block");
		let L3Block41 = new Blocks(19, 6, "Block");
		let L3Block42 = new Blocks(23, 6, "Block");
		let L3Block43 = new Blocks(27, 6, "Block");
		let L3Block44 = new Blocks(28, 6, "Block");
		let L3Block45 = new Blocks(29, 6, "Block");
		let L3Block46 = new Blocks(3, 7, "Block");
		let L3Block47 = new Blocks(7, 7, "Block");
		let L3Block48 = new Blocks(11, 7, "Block");
		let L3Block49 = new Blocks(15, 7, "Block");
		let L3Block50 = new Blocks(19, 7, "Block");
		let L3Block51 = new Blocks(23, 7, "Block");
		let L3Block52 = new Blocks(27, 7, "Block");
		let L3Block53 = new Blocks(28, 7, "Block");
		let L3Block54 = new Blocks(29, 7, "Block");
		let L3Block55 = new Blocks(3, 8, "Block");
		let L3Block56 = new Blocks(7, 8, "Block");
		let L3Block57 = new Blocks(11, 8, "Block");
		let L3Block58 = new Blocks(15, 8, "Block");
		let L3Block59 = new Blocks(19, 8, "Block");
		let L3Block60 = new Blocks(23, 8, "Block");
		let L3Block61 = new Blocks(27, 8, "Block");
		let L3Block62 = new Blocks(28, 8, "Block");
		let L3Block63 = new Blocks(29, 8, "Block");
		let L3Block64 = new Blocks(3, 9, "Block");
		let L3Block65 = new Blocks(7, 9, "Block");
		let L3Block66 = new Blocks(11, 9, "Block");
		let L3Block67 = new Blocks(15, 9, "Block");
		let L3Block68 = new Blocks(19, 9, "Block");
		let L3Block69 = new Blocks(23, 9, "Block");
		let L3Block70 = new Blocks(27, 9, "Block");
		let L3Block71 = new Blocks(28, 9, "Block");
		let L3Block72 = new Blocks(29, 9, "Block");
		let L3Block73 = new Blocks(3, 10, "Block");
		let L3Block74 = new Blocks(7, 10, "Block");
		let L3Block75 = new Blocks(11, 10, "Block");
		let L3Block76 = new Blocks(15, 10, "Block");
		let L3Block77 = new Blocks(19, 10, "Block");
		let L3Block78 = new Blocks(23, 10, "Block");
		let L3Block79 = new Blocks(27, 10, "Block");
		let L3Block80 = new Blocks(28, 10, "Block");
		let L3Block81 = new Blocks(29, 10, "Block");
		let L3Block82 = new Blocks(3, 11, "Block");
		let L3Block83 = new Blocks(7, 11, "Block");
		let L3Block84 = new Blocks(11, 11, "Block");
		let L3Block85 = new Blocks(15, 11, "Block");
		let L3Block86 = new Blocks(19, 11, "Block");
		let L3Block87 = new Blocks(23, 11, "Block");
		let L3Block88 = new Blocks(27, 11, "Block");
		let L3Block89 = new Blocks(28, 11, "Block");
		let L3Block90 = new Blocks(29, 11, "Block");
		let L3Block91 = new Blocks(3, 12, "Block");
		let L3Block92 = new Blocks(7, 12, "Block");
		let L3Block93 = new Blocks(11, 12, "Block");
		let L3Block94 = new Blocks(15, 12, "Block");
		let L3Block95 = new Blocks(19, 12, "Block");
		let L3Block96 = new Blocks(23, 12, "Block");
		let L3Block97 = new Blocks(27, 12, "Block");
		let L3Block98 = new Blocks(28, 12, "Block");
		let L3Block99 = new Blocks(29, 12, "Block");
		let L3Block100 = new Blocks(3, 13, "Block");
		let L3Block101 = new Blocks(7, 13, "Block");
		let L3Block102 = new Blocks(11, 13, "Block");
		let L3Block103 = new Blocks(15, 13, "Block");
		let L3Block104 = new Blocks(19, 13, "Block");
		let L3Block105 = new Blocks(23, 13, "Block");
		let L3Block106 = new Blocks(27, 13, "Block");
		let L3Block107 = new Blocks(28, 13, "Block");
		let L3Block108 = new Blocks(29, 13, "Block");
		let L3Block109 = new Blocks(3, 14, "Block");
		let L3Block110 = new Blocks(7, 14, "Block");
		let L3Block111 = new Blocks(11, 14, "Block");
		let L3Block112 = new Blocks(15, 14, "Block");
		let L3Block113 = new Blocks(19, 14, "Block");
		let L3Block114 = new Blocks(23, 14, "Block");
		let L3Block115 = new Blocks(27, 14, "Block");
		let L3Block116 = new Blocks(28, 14, "Block");
		let L3Block117 = new Blocks(29, 14, "Block");
		let L3Block118 = new Blocks(3, 15, "Block");
		let L3Block119 = new Blocks(7, 15, "Block");
		let L3Block120 = new Blocks(11, 15, "Block");
		let L3Block121 = new Blocks(15, 15, "Block");
		let L3Block122 = new Blocks(19, 15, "Block");
		let L3Block123 = new Blocks(23, 15, "Block");
		let L3Block124 = new Blocks(27, 15, "Block");
		let L3Block125 = new Blocks(28, 15, "Block");
		let L3Block126 = new Blocks(29, 15, "Block");
		let L3Block127 = new Blocks(3, 16, "Block");
		let L3Block128 = new Blocks(7, 16, "Block");
		let L3Block129 = new Blocks(11, 16, "Block");
		let L3Block130 = new Blocks(15, 16, "Block");
		let L3Block131 = new Blocks(19, 16, "Block");
		let L3Block132 = new Blocks(23, 16, "Block");
		let L3Block133 = new Blocks(27, 16, "Block");
		let L3Block134 = new Blocks(28, 16, "Block");
		let L3Block135 = new Blocks(29, 16, "Block");
		let L3Block136 = new Blocks(3, 17, "Block");
		let L3Block137 = new Blocks(11, 17, "Block");
		let L3Block138 = new Blocks(19, 17, "Block");
		let L3Block139 = new Blocks(27, 17, "Block");
		let L3Block140 = new Blocks(28, 17, "Block");
		let L3Block141 = new Blocks(29, 17, "Block");
		let L3Block142 = new Blocks(3, 18, "Block");
		let L3Block143 = new Blocks(11, 18, "Block");
		let L3Block144 = new Blocks(19, 18, "Block");
		let L3Block145 = new Blocks(27, 18, "Block");
		let L3Block146 = new Blocks(28, 18, "Block");
		let L3Block147 = new Blocks(29, 18, "Block");
		let L3Block148 = new Blocks(3, 19, "Block");
		let L3Block149 = new Blocks(11, 19, "Block");
		let L3Block150 = new Blocks(19, 19, "Block");
		let L3Block151 = new Blocks(27, 19, "Block");
		let L3Block152 = new Blocks(28, 19, "Block");
		let L3Block153 = new Blocks(29, 19, "Block");
		let L3Flag = new Blocks(28, 1, "Flag");
		BlockList.push([
			L3Block1,
			L3Block2,
			L3Block3,
			L3Block4,
			L3Block5,
			L3Block6,
			L3Block7,
			L3Block8,
			L3Block9,
			L3Block10,
			L3Block11,
			L3Block12,
			L3Block13,
			L3Block14,
			L3Block15,
			L3Block16,
			L3Block17,
			L3Block18,
			L3Block19,
			L3Block20,
			L3Block21,
			L3Block22,
			L3Block23,
			L3Block24,
			L3Block25,
			L3Block26,
			L3Block27,
			L3Block28,
			L3Block29,
			L3Block30,
			L3Block31,
			L3Block32,
			L3Block33,
			L3Block34,
			L3Block35,
			L3Block36,
			L3Block37,
			L3Block38,
			L3Block39,
			L3Block40,
			L3Block41,
			L3Block42,
			L3Block43,
			L3Block44,
			L3Block45,
			L3Block46,
			L3Block47,
			L3Block48,
			L3Block49,
			L3Block50,
			L3Block51,
			L3Block52,
			L3Block53,
			L3Block54,
			L3Block55,
			L3Block56,
			L3Block57,
			L3Block58,
			L3Block59,
			L3Block60,
			L3Block61,
			L3Block62,
			L3Block63,
			L3Block64,
			L3Block65,
			L3Block66,
			L3Block67,
			L3Block68,
			L3Block69,
			L3Block70,
			L3Block71,
			L3Block72,
			L3Block73,
			L3Block74,
			L3Block75,
			L3Block76,
			L3Block77,
			L3Block78,
			L3Block79,
			L3Block80,
			L3Block81,
			L3Block82,
			L3Block83,
			L3Block84,
			L3Block85,
			L3Block86,
			L3Block87,
			L3Block88,
			L3Block89,
			L3Block90,
			L3Block91,
			L3Block92,
			L3Block93,
			L3Block94,
			L3Block95,
			L3Block96,
			L3Block97,
			L3Block98,
			L3Block99,
			L3Block100,
			L3Block101,
			L3Block102,
			L3Block103,
			L3Block104,
			L3Block105,
			L3Block106,
			L3Block107,
			L3Block108,
			L3Block109,
			L3Block110,
			L3Block111,
			L3Block112,
			L3Block113,
			L3Block114,
			L3Block115,
			L3Block116,
			L3Block117,
			L3Block118,
			L3Block119,
			L3Block120,
			L3Block121,
			L3Block122,
			L3Block123,
			L3Block124,
			L3Block125,
			L3Block126,
			L3Block127,
			L3Block128,
			L3Block129,
			L3Block130,
			L3Block131,
			L3Block132,
			L3Block133,
			L3Block134,
			L3Block135,
			L3Block136,
			L3Block137,
			L3Block138,
			L3Block139,
			L3Block140,
			L3Block141,
			L3Block142,
			L3Block143,
			L3Block144,
			L3Block145,
			L3Block146,
			L3Block147,
			L3Block148,
			L3Block149,
			L3Block150,
			L3Block151,
			L3Block152,
			L3Block153,
			L3Flag
		]);
		let L4Flag = new Blocks(28, 1, "Flag");
		BlockList.push([L4Flag]);
		let L5Key1 = new Blocks(21, 14, "Key", "", "Key");
		let L5LockedPortal1 = new Blocks(
			25,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			29,
			18
		);
		let L5LockedPortal2 = new Blocks(
			29,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			25,
			18
		);
		let L5Flag = new Blocks(29, 2, "Flag");
		BlockList.push([L5Key1, L5LockedPortal1, L5LockedPortal2, L5Flag]);
		let L6Key1 = new Blocks(21, 14, "Key", "", "Key");
		let L6LockedPortal1 = new Blocks(
			25,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			29,
			18
		);
		let L6LockedPortal2 = new Blocks(
			29,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			25,
			18
		);
		let L6Flag = new Blocks(29, 2, "Flag");
		BlockList.push([L6Key1, L6LockedPortal1, L6LockedPortal2, L6Flag]);
		let L7Block1 = new Blocks(3, 0, "Block");
		let L7Key1 = new Blocks(24, 0, "Key", "", "Key");
		let L7Block2 = new Blocks(25, 0, "Block");
		let L7Block3 = new Blocks(26, 0, "Block");
		let L7LockedPortal1 = new Blocks(
			1,
			1,
			"LockedPortal",
			"",
			"LockedPortal",
			28,
			18
		);
		let L7Block4 = new Blocks(3, 1, "Block");
		let L7Block5 = new Blocks(25, 1, "Block");
		let L7Block6 = new Blocks(26, 1, "Block");
		let L7Block7 = new Blocks(3, 2, "Block");
		let L7Block8 = new Blocks(25, 2, "Block");
		let L7Block9 = new Blocks(26, 2, "Block");
		let L7Block10 = new Blocks(3, 3, "Block");
		let L7Block11 = new Blocks(25, 3, "Block");
		let L7Block12 = new Blocks(26, 3, "Block");
		let L7Block13 = new Blocks(3, 4, "Block");
		let L7Block14 = new Blocks(25, 4, "Block");
		let L7Block15 = new Blocks(26, 4, "Block");
		let L7Block16 = new Blocks(3, 5, "Block");
		let L7Block17 = new Blocks(25, 5, "Block");
		let L7Block18 = new Blocks(26, 5, "Block");
		let L7Block19 = new Blocks(3, 6, "Block");
		let L7Block20 = new Blocks(25, 6, "Block");
		let L7Block21 = new Blocks(26, 6, "Block");
		let L7Block22 = new Blocks(3, 7, "Block");
		let L7Block23 = new Blocks(25, 7, "Block");
		let L7Block24 = new Blocks(26, 7, "Block");
		let L7Block25 = new Blocks(3, 8, "Block");
		let L7Block26 = new Blocks(25, 8, "Block");
		let L7Block27 = new Blocks(26, 8, "Block");
		let L7Block28 = new Blocks(3, 9, "Block");
		let L7Block29 = new Blocks(25, 9, "Block");
		let L7Block30 = new Blocks(26, 9, "Block");
		let L7Block31 = new Blocks(3, 10, "Block");
		let L7Block32 = new Blocks(25, 10, "Block");
		let L7Block33 = new Blocks(26, 10, "Block");
		let L7Block34 = new Blocks(3, 11, "Block");
		let L7Block35 = new Blocks(25, 11, "Block");
		let L7Block36 = new Blocks(26, 11, "Block");
		let L7Block37 = new Blocks(3, 12, "Block");
		let L7Block38 = new Blocks(25, 12, "Block");
		let L7Block39 = new Blocks(26, 12, "Block");
		let L7Block40 = new Blocks(3, 13, "Block");
		let L7Block41 = new Blocks(25, 13, "Block");
		let L7Block42 = new Blocks(26, 13, "Block");
		let L7Block43 = new Blocks(3, 14, "Block");
		let L7Block44 = new Blocks(25, 14, "Block");
		let L7Block45 = new Blocks(26, 14, "Block");
		let L7Block46 = new Blocks(3, 15, "Block");
		let L7Block47 = new Blocks(25, 15, "Block");
		let L7Block48 = new Blocks(26, 15, "Block");
		let L7Block49 = new Blocks(3, 16, "Block");
		let L7Block50 = new Blocks(25, 16, "Block");
		let L7Block51 = new Blocks(26, 16, "Block");
		let L7Block52 = new Blocks(25, 17, "Block");
		let L7Block53 = new Blocks(26, 17, "Block");
		let L7Block54 = new Blocks(25, 18, "Block");
		let L7Block55 = new Blocks(26, 18, "Block");
		let L7LockedPortal2 = new Blocks(
			28,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			1,
			1
		);
		let L7Block56 = new Blocks(25, 19, "Block");
		let L7Block57 = new Blocks(26, 19, "Block");
		let L7Flag = new Blocks(28, 1, "Flag");
		BlockList.push([
			L7Block1,
			L7Key1,
			L7Block2,
			L7Block3,
			L7LockedPortal1,
			L7Block4,
			L7Block5,
			L7Block6,
			L7Block7,
			L7Block8,
			L7Block9,
			L7Block10,
			L7Block11,
			L7Block12,
			L7Block13,
			L7Block14,
			L7Block15,
			L7Block16,
			L7Block17,
			L7Block18,
			L7Block19,
			L7Block20,
			L7Block21,
			L7Block22,
			L7Block23,
			L7Block24,
			L7Block25,
			L7Block26,
			L7Block27,
			L7Block28,
			L7Block29,
			L7Block30,
			L7Block31,
			L7Block32,
			L7Block33,
			L7Block34,
			L7Block35,
			L7Block36,
			L7Block37,
			L7Block38,
			L7Block39,
			L7Block40,
			L7Block41,
			L7Block42,
			L7Block43,
			L7Block44,
			L7Block45,
			L7Block46,
			L7Block47,
			L7Block48,
			L7Block49,
			L7Block50,
			L7Block51,
			L7Block52,
			L7Block53,
			L7Block54,
			L7Block55,
			L7LockedPortal2,
			L7Block56,
			L7Block57,
			L7Flag
		]);
		let L8MovingBlock1 = new Blocks(10, 0, "Block", "Down");
		let L8MovingBlock2 = new Blocks(21, 0, "Block", "Down");
		let L8MovingBlock3 = new Blocks(3, 1, "Block", "Down");
		let L8MovingBlock4 = new Blocks(13, 1, "Block", "Down");
		let L8MovingBlock5 = new Blocks(17, 1, "Block", "Down");
		let L8MovingBlock6 = new Blocks(6, 3, "Block", "Down");
		let L8MovingBlock7 = new Blocks(11, 3, "Block", "Down");
		let L8MovingBlock8 = new Blocks(16, 3, "Block", "Down");
		let L8MovingBlock9 = new Blocks(17, 3, "Block", "Down");
		let L8MovingBlock10 = new Blocks(18, 3, "Block", "Down");
		let L8MovingBlock11 = new Blocks(23, 3, "Block", "Down");
		let L8MovingBlock12 = new Blocks(8, 4, "Block", "Down");
		let L8MovingBlock13 = new Blocks(16, 4, "Block", "Down");
		let L8MovingBlock14 = new Blocks(18, 4, "Block", "Down");
		let L8MovingBlock15 = new Blocks(25, 4, "Block", "Down");
		let L8MovingBlock16 = new Blocks(14, 5, "Block", "Down");
		let L8MovingBlock17 = new Blocks(16, 5, "Block", "Down");
		let L8MovingBlock18 = new Blocks(18, 5, "Block", "Down");
		let L8MovingBlock19 = new Blocks(21, 5, "Block", "Down");
		let L8MovingBlock20 = new Blocks(5, 7, "Block", "Down");
		let L8MovingBlock21 = new Blocks(9, 7, "Block", "Down");
		let L8MovingBlock22 = new Blocks(12, 7, "Block", "Down");
		let L8MovingBlock23 = new Blocks(19, 8, "Block", "Down");
		let L8MovingBlock24 = new Blocks(24, 8, "Block", "Down");
		let L8MovingBlock25 = new Blocks(15, 9, "Block", "Down");
		let L8MovingBlock26 = new Blocks(11, 10, "Block", "Down");
		let L8MovingBlock27 = new Blocks(26, 10, "Block", "Down");
		let L8MovingBlock28 = new Blocks(4, 11, "Block", "Down");
		let L8MovingBlock29 = new Blocks(7, 11, "Block", "Down");
		let L8MovingBlock30 = new Blocks(21, 11, "Block", "Down");
		let L8MovingBlock31 = new Blocks(23, 11, "Block", "Down");
		let L8MovingBlock32 = new Blocks(14, 12, "Block", "Down");
		let L8MovingBlock33 = new Blocks(19, 12, "Block", "Down");
		let L8MovingBlock34 = new Blocks(11, 13, "Block", "Down");
		let L8MovingBlock35 = new Blocks(17, 13, "Block", "Down");
		let L8MovingBlock36 = new Blocks(8, 14, "Block", "Down");
		let L8MovingBlock37 = new Blocks(25, 14, "Block", "Down");
		let L8MovingBlock38 = new Blocks(14, 15, "Block", "Down");
		let L8MovingBlock39 = new Blocks(22, 15, "Block", "Down");
		let L8MovingBlock40 = new Blocks(3, 16, "Block", "Down");
		let L8MovingBlock41 = new Blocks(6, 16, "Block", "Down");
		let L8MovingBlock42 = new Blocks(18, 16, "Block", "Down");
		let L8MovingBlock43 = new Blocks(9, 17, "Block", "Down");
		let L8MovingBlock44 = new Blocks(12, 17, "Block", "Down");
		let L8MovingBlock45 = new Blocks(26, 17, "Block", "Down");
		let L8Flag = new Blocks(28, 1, "Flag");
		BlockList.push([
			L8MovingBlock1,
			L8MovingBlock2,
			L8MovingBlock3,
			L8MovingBlock4,
			L8MovingBlock5,
			L8MovingBlock6,
			L8MovingBlock7,
			L8MovingBlock8,
			L8MovingBlock9,
			L8MovingBlock10,
			L8MovingBlock11,
			L8MovingBlock12,
			L8MovingBlock13,
			L8MovingBlock14,
			L8MovingBlock15,
			L8MovingBlock16,
			L8MovingBlock17,
			L8MovingBlock18,
			L8MovingBlock19,
			L8MovingBlock20,
			L8MovingBlock21,
			L8MovingBlock22,
			L8MovingBlock23,
			L8MovingBlock24,
			L8MovingBlock25,
			L8MovingBlock26,
			L8MovingBlock27,
			L8MovingBlock28,
			L8MovingBlock29,
			L8MovingBlock30,
			L8MovingBlock31,
			L8MovingBlock32,
			L8MovingBlock33,
			L8MovingBlock34,
			L8MovingBlock35,
			L8MovingBlock36,
			L8MovingBlock37,
			L8MovingBlock38,
			L8MovingBlock39,
			L8MovingBlock40,
			L8MovingBlock41,
			L8MovingBlock42,
			L8MovingBlock43,
			L8MovingBlock44,
			L8MovingBlock45,
			L8Flag
		]);
		let L9Block1 = new Blocks(5, 2, "Block");
		let L9Block2 = new Blocks(6, 2, "Block");
		let L9Block3 = new Blocks(7, 2, "Block");
		let L9Block4 = new Blocks(9, 2, "Block");
		let L9Block5 = new Blocks(13, 2, "Block");
		let L9Block6 = new Blocks(14, 2, "Block");
		let L9Block7 = new Blocks(15, 2, "Block");
		let L9Block8 = new Blocks(17, 2, "Block");
		let L9Block9 = new Blocks(18, 2, "Block");
		let L9Block10 = new Blocks(19, 2, "Block");
		let L9Block11 = new Blocks(21, 2, "Block");
		let L9Block12 = new Blocks(23, 2, "Block");
		let L9Block13 = new Blocks(5, 3, "Block");
		let L9Block14 = new Blocks(9, 3, "Block");
		let L9Block15 = new Blocks(14, 3, "Block");
		let L9Block16 = new Blocks(17, 3, "Block");
		let L9Block17 = new Blocks(21, 3, "Block");
		let L9Block18 = new Blocks(23, 3, "Block");
		let L9Block19 = new Blocks(5, 4, "Block");
		let L9Block20 = new Blocks(9, 4, "Block");
		let L9Block21 = new Blocks(14, 4, "Block");
		let L9Block22 = new Blocks(17, 4, "Block");
		let L9Block23 = new Blocks(21, 4, "Block");
		let L9Block24 = new Blocks(22, 4, "Block");
		let L9Block25 = new Blocks(5, 5, "Block");
		let L9Block26 = new Blocks(9, 5, "Block");
		let L9Block27 = new Blocks(14, 5, "Block");
		let L9Block28 = new Blocks(17, 5, "Block");
		let L9Block29 = new Blocks(21, 5, "Block");
		let L9Block30 = new Blocks(23, 5, "Block");
		let L9Block31 = new Blocks(5, 6, "Block");
		let L9Block32 = new Blocks(6, 6, "Block");
		let L9Block33 = new Blocks(7, 6, "Block");
		let L9Block34 = new Blocks(9, 6, "Block");
		let L9Block35 = new Blocks(10, 6, "Block");
		let L9Block36 = new Blocks(11, 6, "Block");
		let L9Block37 = new Blocks(13, 6, "Block");
		let L9Block38 = new Blocks(14, 6, "Block");
		let L9Block39 = new Blocks(15, 6, "Block");
		let L9Block40 = new Blocks(17, 6, "Block");
		let L9Block41 = new Blocks(18, 6, "Block");
		let L9Block42 = new Blocks(19, 6, "Block");
		let L9Block43 = new Blocks(21, 6, "Block");
		let L9Block44 = new Blocks(23, 6, "Block");
		let L9Block45 = new Blocks(1, 8, "Block");
		let L9Block46 = new Blocks(2, 8, "Block");
		let L9Block47 = new Blocks(3, 8, "Block");
		let L9Block48 = new Blocks(5, 8, "Block");
		let L9Block49 = new Blocks(6, 8, "Block");
		let L9Block50 = new Blocks(7, 8, "Block");
		let L9Block51 = new Blocks(10, 8, "Block");
		let L9Block52 = new Blocks(11, 8, "Block");
		let L9Block53 = new Blocks(12, 8, "Block");
		let L9Block54 = new Blocks(14, 8, "Block");
		let L9Block55 = new Blocks(16, 8, "Block");
		let L9Block56 = new Blocks(18, 8, "Block");
		let L9Block57 = new Blocks(19, 8, "Block");
		let L9Block58 = new Blocks(20, 8, "Block");
		let L9Block59 = new Blocks(22, 8, "Block");
		let L9Block60 = new Blocks(23, 8, "Block");
		let L9Block61 = new Blocks(24, 8, "Block");
		let L9Block62 = new Blocks(26, 8, "Block");
		let L9Block63 = new Blocks(27, 8, "Block");
		let L9Block64 = new Blocks(28, 8, "Block");
		let L9Block65 = new Blocks(2, 9, "Block");
		let L9Block66 = new Blocks(5, 9, "Block");
		let L9Block67 = new Blocks(7, 9, "Block");
		let L9Block68 = new Blocks(10, 9, "Block");
		let L9Block69 = new Blocks(14, 9, "Block");
		let L9Block70 = new Blocks(16, 9, "Block");
		let L9Block71 = new Blocks(18, 9, "Block");
		let L9Block72 = new Blocks(20, 9, "Block");
		let L9Block73 = new Blocks(22, 9, "Block");
		let L9Block74 = new Blocks(24, 9, "Block");
		let L9Block75 = new Blocks(27, 9, "Block");
		let L9Block76 = new Blocks(2, 10, "Block");
		let L9Block77 = new Blocks(5, 10, "Block");
		let L9Block78 = new Blocks(7, 10, "Block");
		let L9Block79 = new Blocks(10, 10, "Block");
		let L9Block80 = new Blocks(11, 10, "Block");
		let L9Block81 = new Blocks(12, 10, "Block");
		let L9Block82 = new Blocks(14, 10, "Block");
		let L9Block83 = new Blocks(15, 10, "Block");
		let L9Block84 = new Blocks(16, 10, "Block");
		let L9Block85 = new Blocks(18, 10, "Block");
		let L9Block86 = new Blocks(20, 10, "Block");
		let L9Block87 = new Blocks(22, 10, "Block");
		let L9Block88 = new Blocks(24, 10, "Block");
		let L9Block89 = new Blocks(27, 10, "Block");
		let L9Block90 = new Blocks(2, 11, "Block");
		let L9Block91 = new Blocks(5, 11, "Block");
		let L9Block92 = new Blocks(7, 11, "Block");
		let L9Block93 = new Blocks(12, 11, "Block");
		let L9Block94 = new Blocks(14, 11, "Block");
		let L9Block95 = new Blocks(16, 11, "Block");
		let L9Block96 = new Blocks(18, 11, "Block");
		let L9Block97 = new Blocks(20, 11, "Block");
		let L9Block98 = new Blocks(22, 11, "Block");
		let L9Block99 = new Blocks(24, 11, "Block");
		let L9Block100 = new Blocks(27, 11, "Block");
		let L9Block101 = new Blocks(2, 12, "Block");
		let L9Block102 = new Blocks(5, 12, "Block");
		let L9Block103 = new Blocks(6, 12, "Block");
		let L9Block104 = new Blocks(7, 12, "Block");
		let L9Block105 = new Blocks(10, 12, "Block");
		let L9Block106 = new Blocks(11, 12, "Block");
		let L9Block107 = new Blocks(12, 12, "Block");
		let L9Block108 = new Blocks(14, 12, "Block");
		let L9Block109 = new Blocks(16, 12, "Block");
		let L9Block110 = new Blocks(18, 12, "Block");
		let L9Block111 = new Blocks(19, 12, "Block");
		let L9Block112 = new Blocks(20, 12, "Block");
		let L9Block113 = new Blocks(22, 12, "Block");
		let L9Block114 = new Blocks(23, 12, "Block");
		let L9Block115 = new Blocks(24, 12, "Block");
		let L9Block116 = new Blocks(27, 12, "Block");
		let L9Flag = new Blocks(28, 1, "Flag");
		BlockList.push([
			L9Block1,
			L9Block2,
			L9Block3,
			L9Block4,
			L9Block5,
			L9Block6,
			L9Block7,
			L9Block8,
			L9Block9,
			L9Block10,
			L9Block11,
			L9Block12,
			L9Block13,
			L9Block14,
			L9Block15,
			L9Block16,
			L9Block17,
			L9Block18,
			L9Block19,
			L9Block20,
			L9Block21,
			L9Block22,
			L9Block23,
			L9Block24,
			L9Block25,
			L9Block26,
			L9Block27,
			L9Block28,
			L9Block29,
			L9Block30,
			L9Block31,
			L9Block32,
			L9Block33,
			L9Block34,
			L9Block35,
			L9Block36,
			L9Block37,
			L9Block38,
			L9Block39,
			L9Block40,
			L9Block41,
			L9Block42,
			L9Block43,
			L9Block44,
			L9Block45,
			L9Block46,
			L9Block47,
			L9Block48,
			L9Block49,
			L9Block50,
			L9Block51,
			L9Block52,
			L9Block53,
			L9Block54,
			L9Block55,
			L9Block56,
			L9Block57,
			L9Block58,
			L9Block59,
			L9Block60,
			L9Block61,
			L9Block62,
			L9Block63,
			L9Block64,
			L9Block65,
			L9Block66,
			L9Block67,
			L9Block68,
			L9Block69,
			L9Block70,
			L9Block71,
			L9Block72,
			L9Block73,
			L9Block74,
			L9Block75,
			L9Block76,
			L9Block77,
			L9Block78,
			L9Block79,
			L9Block80,
			L9Block81,
			L9Block82,
			L9Block83,
			L9Block84,
			L9Block85,
			L9Block86,
			L9Block87,
			L9Block88,
			L9Block89,
			L9Block90,
			L9Block91,
			L9Block92,
			L9Block93,
			L9Block94,
			L9Block95,
			L9Block96,
			L9Block97,
			L9Block98,
			L9Block99,
			L9Block100,
			L9Block101,
			L9Block102,
			L9Block103,
			L9Block104,
			L9Block105,
			L9Block106,
			L9Block107,
			L9Block108,
			L9Block109,
			L9Block110,
			L9Block111,
			L9Block112,
			L9Block113,
			L9Block114,
			L9Block115,
			L9Block116,
			L9Flag
		]);
		let L10Block1 = new Blocks(26, 0, "Block");
		let L10Block2 = new Blocks(0, 1, "Block");
		let L10Block3 = new Blocks(1, 1, "Block");
		let L10Block4 = new Blocks(2, 1, "Block");
		let L10Block5 = new Blocks(3, 1, "Block");
		let L10Block6 = new Blocks(4, 1, "Block");
		let L10Block7 = new Blocks(5, 1, "Block");
		let L10Block8 = new Blocks(6, 1, "Block");
		let L10Block9 = new Blocks(7, 1, "Block");
		let L10Block10 = new Blocks(8, 1, "Block");
		let L10Block11 = new Blocks(9, 1, "Block");
		let L10Block12 = new Blocks(10, 1, "Block");
		let L10Block13 = new Blocks(11, 1, "Block");
		let L10Block14 = new Blocks(12, 1, "Block");
		let L10Block15 = new Blocks(13, 1, "Block");
		let L10Block16 = new Blocks(14, 1, "Block");
		let L10Block17 = new Blocks(15, 1, "Block");
		let L10Block18 = new Blocks(16, 1, "Block");
		let L10Block19 = new Blocks(17, 1, "Block");
		let L10Block20 = new Blocks(18, 1, "Block");
		let L10Block21 = new Blocks(19, 1, "Block");
		let L10Block22 = new Blocks(20, 1, "Block");
		let L10Block23 = new Blocks(21, 1, "Block");
		let L10Block24 = new Blocks(22, 1, "Block");
		let L10Block25 = new Blocks(23, 1, "Block");
		let L10Block26 = new Blocks(24, 1, "Block");
		let L10Block27 = new Blocks(25, 1, "Block");
		let L10Block28 = new Blocks(26, 1, "Block");
		let L10Block29 = new Blocks(26, 2, "Block");
		let L10Block30 = new Blocks(26, 3, "Block");
		let L10Red1 = new Blocks(0, 4, "Red");
		let L10Red2 = new Blocks(1, 4, "Red");
		let L10Red3 = new Blocks(2, 4, "Red");
		let L10Red4 = new Blocks(3, 4, "Red");
		let L10Red5 = new Blocks(4, 4, "Red");
		let L10Red6 = new Blocks(5, 4, "Red");
		let L10Red7 = new Blocks(6, 4, "Red");
		let L10Red8 = new Blocks(7, 4, "Red");
		let L10Red9 = new Blocks(8, 4, "Red");
		let L10Red10 = new Blocks(9, 4, "Red");
		let L10Red11 = new Blocks(10, 4, "Red");
		let L10Red12 = new Blocks(11, 4, "Red");
		let L10Red13 = new Blocks(12, 4, "Red");
		let L10Red14 = new Blocks(13, 4, "Red");
		let L10Red15 = new Blocks(14, 4, "Red");
		let L10Red16 = new Blocks(15, 4, "Red");
		let L10Red17 = new Blocks(16, 4, "Red");
		let L10Red18 = new Blocks(17, 4, "Red");
		let L10Red19 = new Blocks(18, 4, "Red");
		let L10Red20 = new Blocks(19, 4, "Red");
		let L10Red21 = new Blocks(20, 4, "Red");
		let L10Red22 = new Blocks(21, 4, "Red");
		let L10Red23 = new Blocks(22, 4, "Red");
		let L10Red24 = new Blocks(23, 4, "Red");
		let L10Red25 = new Blocks(24, 4, "Red");
		let L10Red26 = new Blocks(25, 4, "Red");
		let L10Block31 = new Blocks(26, 4, "Block");
		let L10Block32 = new Blocks(26, 5, "Block");
		let L10Block33 = new Blocks(26, 6, "Block");
		let L10Block34 = new Blocks(26, 7, "Block");
		let L10Blue1 = new Blocks(0, 8, "Blue");
		let L10Blue2 = new Blocks(1, 8, "Blue");
		let L10Blue3 = new Blocks(2, 8, "Blue");
		let L10Blue4 = new Blocks(3, 8, "Blue");
		let L10Blue5 = new Blocks(4, 8, "Blue");
		let L10Blue6 = new Blocks(5, 8, "Blue");
		let L10Blue7 = new Blocks(6, 8, "Blue");
		let L10Blue8 = new Blocks(7, 8, "Blue");
		let L10Blue9 = new Blocks(8, 8, "Blue");
		let L10Blue10 = new Blocks(9, 8, "Blue");
		let L10Blue11 = new Blocks(10, 8, "Blue");
		let L10Blue12 = new Blocks(11, 8, "Blue");
		let L10Blue13 = new Blocks(12, 8, "Blue");
		let L10Blue14 = new Blocks(13, 8, "Blue");
		let L10Blue15 = new Blocks(14, 8, "Blue");
		let L10Blue16 = new Blocks(15, 8, "Blue");
		let L10Blue17 = new Blocks(16, 8, "Blue");
		let L10Blue18 = new Blocks(17, 8, "Blue");
		let L10Blue19 = new Blocks(18, 8, "Blue");
		let L10Blue20 = new Blocks(19, 8, "Blue");
		let L10Blue21 = new Blocks(20, 8, "Blue");
		let L10Blue22 = new Blocks(21, 8, "Blue");
		let L10Blue23 = new Blocks(22, 8, "Blue");
		let L10Blue24 = new Blocks(23, 8, "Blue");
		let L10Blue25 = new Blocks(24, 8, "Blue");
		let L10Blue26 = new Blocks(25, 8, "Blue");
		let L10Block35 = new Blocks(26, 8, "Block");
		let L10Block36 = new Blocks(26, 9, "Block");
		let L10Block37 = new Blocks(26, 10, "Block");
		let L10Block38 = new Blocks(26, 11, "Block");
		let L10Red27 = new Blocks(0, 12, "Red");
		let L10Red28 = new Blocks(1, 12, "Red");
		let L10Red29 = new Blocks(2, 12, "Red");
		let L10Red30 = new Blocks(3, 12, "Red");
		let L10Red31 = new Blocks(4, 12, "Red");
		let L10Red32 = new Blocks(5, 12, "Red");
		let L10Red33 = new Blocks(6, 12, "Red");
		let L10Red34 = new Blocks(7, 12, "Red");
		let L10Red35 = new Blocks(8, 12, "Red");
		let L10Red36 = new Blocks(9, 12, "Red");
		let L10Red37 = new Blocks(10, 12, "Red");
		let L10Red38 = new Blocks(11, 12, "Red");
		let L10Red39 = new Blocks(12, 12, "Red");
		let L10Red40 = new Blocks(13, 12, "Red");
		let L10Red41 = new Blocks(14, 12, "Red");
		let L10Red42 = new Blocks(15, 12, "Red");
		let L10Red43 = new Blocks(16, 12, "Red");
		let L10Red44 = new Blocks(17, 12, "Red");
		let L10Red45 = new Blocks(18, 12, "Red");
		let L10Red46 = new Blocks(19, 12, "Red");
		let L10Red47 = new Blocks(20, 12, "Red");
		let L10Red48 = new Blocks(21, 12, "Red");
		let L10Red49 = new Blocks(22, 12, "Red");
		let L10Red50 = new Blocks(23, 12, "Red");
		let L10Red51 = new Blocks(24, 12, "Red");
		let L10Red52 = new Blocks(25, 12, "Red");
		let L10Block39 = new Blocks(26, 12, "Block");
		let L10Block40 = new Blocks(26, 13, "Block");
		let L10Block41 = new Blocks(26, 14, "Block");
		let L10Block42 = new Blocks(26, 15, "Block");
		let L10Blue27 = new Blocks(0, 16, "Blue");
		let L10Blue28 = new Blocks(1, 16, "Blue");
		let L10Blue29 = new Blocks(2, 16, "Blue");
		let L10Blue30 = new Blocks(3, 16, "Blue");
		let L10Blue31 = new Blocks(4, 16, "Blue");
		let L10Blue32 = new Blocks(5, 16, "Blue");
		let L10Blue33 = new Blocks(6, 16, "Blue");
		let L10Blue34 = new Blocks(7, 16, "Blue");
		let L10Blue35 = new Blocks(8, 16, "Blue");
		let L10Blue36 = new Blocks(9, 16, "Blue");
		let L10Blue37 = new Blocks(10, 16, "Blue");
		let L10Blue38 = new Blocks(11, 16, "Blue");
		let L10Blue39 = new Blocks(12, 16, "Blue");
		let L10Blue40 = new Blocks(13, 16, "Blue");
		let L10Blue41 = new Blocks(14, 16, "Blue");
		let L10Blue42 = new Blocks(15, 16, "Blue");
		let L10Blue43 = new Blocks(16, 16, "Blue");
		let L10Blue44 = new Blocks(17, 16, "Blue");
		let L10Blue45 = new Blocks(18, 16, "Blue");
		let L10Blue46 = new Blocks(19, 16, "Blue");
		let L10Blue47 = new Blocks(20, 16, "Blue");
		let L10Blue48 = new Blocks(21, 16, "Blue");
		let L10Blue49 = new Blocks(22, 16, "Blue");
		let L10Blue50 = new Blocks(23, 16, "Blue");
		let L10Blue51 = new Blocks(24, 16, "Blue");
		let L10Blue52 = new Blocks(25, 16, "Blue");
		let L10Block43 = new Blocks(26, 16, "Block");
		let L10Block44 = new Blocks(26, 17, "Block");
		let L10LockedPortal1 = new Blocks(
			24,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			28,
			18
		);
		let L10Block45 = new Blocks(26, 18, "Block");
		let L10LockedPortal2 = new Blocks(
			28,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			24,
			18
		);
		let L10Block46 = new Blocks(26, 19, "Block");
		let L10Flag = new Blocks(28, 1, "Flag");
		BlockList.push([
			L10Block1,
			L10Block2,
			L10Block3,
			L10Block4,
			L10Block5,
			L10Block6,
			L10Block7,
			L10Block8,
			L10Block9,
			L10Block10,
			L10Block11,
			L10Block12,
			L10Block13,
			L10Block14,
			L10Block15,
			L10Block16,
			L10Block17,
			L10Block18,
			L10Block19,
			L10Block20,
			L10Block21,
			L10Block22,
			L10Block23,
			L10Block24,
			L10Block25,
			L10Block26,
			L10Block27,
			L10Block28,
			L10Block29,
			L10Block30,
			L10Red1,
			L10Red2,
			L10Red3,
			L10Red4,
			L10Red5,
			L10Red6,
			L10Red7,
			L10Red8,
			L10Red9,
			L10Red10,
			L10Red11,
			L10Red12,
			L10Red13,
			L10Red14,
			L10Red15,
			L10Red16,
			L10Red17,
			L10Red18,
			L10Red19,
			L10Red20,
			L10Red21,
			L10Red22,
			L10Red23,
			L10Red24,
			L10Red25,
			L10Red26,
			L10Block31,
			L10Block32,
			L10Block33,
			L10Block34,
			L10Blue1,
			L10Blue2,
			L10Blue3,
			L10Blue4,
			L10Blue5,
			L10Blue6,
			L10Blue7,
			L10Blue8,
			L10Blue9,
			L10Blue10,
			L10Blue11,
			L10Blue12,
			L10Blue13,
			L10Blue14,
			L10Blue15,
			L10Blue16,
			L10Blue17,
			L10Blue18,
			L10Blue19,
			L10Blue20,
			L10Blue21,
			L10Blue22,
			L10Blue23,
			L10Blue24,
			L10Blue25,
			L10Blue26,
			L10Block35,
			L10Block36,
			L10Block37,
			L10Block38,
			L10Red27,
			L10Red28,
			L10Red29,
			L10Red30,
			L10Red31,
			L10Red32,
			L10Red33,
			L10Red34,
			L10Red35,
			L10Red36,
			L10Red37,
			L10Red38,
			L10Red39,
			L10Red40,
			L10Red41,
			L10Red42,
			L10Red43,
			L10Red44,
			L10Red45,
			L10Red46,
			L10Red47,
			L10Red48,
			L10Red49,
			L10Red50,
			L10Red51,
			L10Red52,
			L10Block39,
			L10Block40,
			L10Block41,
			L10Block42,
			L10Blue27,
			L10Blue28,
			L10Blue29,
			L10Blue30,
			L10Blue31,
			L10Blue32,
			L10Blue33,
			L10Blue34,
			L10Blue35,
			L10Blue36,
			L10Blue37,
			L10Blue38,
			L10Blue39,
			L10Blue40,
			L10Blue41,
			L10Blue42,
			L10Blue43,
			L10Blue44,
			L10Blue45,
			L10Blue46,
			L10Blue47,
			L10Blue48,
			L10Blue49,
			L10Blue50,
			L10Blue51,
			L10Blue52,
			L10Block43,
			L10Block44,
			L10LockedPortal1,
			L10Block45,
			L10LockedPortal2,
			L10Block46,
			L10Flag
		]);

		BlockList.push([]);
		Levels.push(BlockList);

		let EnemyList = [];
		EnemyList.push([]);
		let L2Area1 = new Enemies(11, 2, "Area", 2, 15, "V", -2);
		let L2Area2 = new Enemies(23, 2, "Area", 2, 15, "V", -2);
		let L2Area3 = new Enemies(5, 17, "Area", 2, 15, "V", 2);
		let L2Area4 = new Enemies(17, 17, "Area", 2, 15, "V", 2);
		EnemyList.push([L2Area1, L2Area2, L2Area3, L2Area4]);
		let L3Area1 = new Enemies(2, 2, "Area", 2, 22, "H", 2);
		let L3Area2 = new Enemies(1, 6, "Area", 1, 24, "H", 4);
		let L3Area3 = new Enemies(1, 9, "Area", 1, 24, "H", 3);
		let L3Area4 = new Enemies(1, 12, "Area", 1, 24, "H", 2);
		let L3Area5 = new Enemies(1, 15, "Area", 1, 24, "H", 1.5);
		let L3Area6 = new Enemies(5, 18, "Area", 1, 20, "H", 1);
		EnemyList.push([L3Area1, L3Area2, L3Area3, L3Area4, L3Area5, L3Area6]);
		let L4Sniper1 = new Enemies(3, 19, "Sniper", 16, 0, "Up");
		let L4Sniper2 = new Enemies(11, 19, "Sniper", 16, 0, "Up");
		let L4Sniper3 = new Enemies(19, 19, "Sniper", 16, 0, "Up");
		let L4Sniper4 = new Enemies(7, 0, "Sniper", 16, 0, "Down");
		let L4Sniper5 = new Enemies(15, 0, "Sniper", 16, 0, "Down");
		let L4Sniper6 = new Enemies(23, 0, "Sniper", 16, 0, "Down");
		let L4Area1 = new Enemies(25, 18, "Area", 1, 17, "V", 1);
		let L4Area2 = new Enemies(28, 18, "Area", 1, 14, "V", 2);
		EnemyList.push([
			L4Sniper1,
			L4Sniper2,
			L4Sniper3,
			L4Sniper4,
			L4Sniper5,
			L4Sniper6,
			L4Area1,
			L4Area2
		]);
		let L5Sniper1 = new Enemies(0, 0, "Sniper", 29, 0, "Right");
		let L5Sniper2 = new Enemies(27, 19, "Sniper", 19, 0, "Up");
		let L5Sniper3 = new Enemies(0, 16, "Sniper", 11, 0, "Right");
		let L5Sniper4 = new Enemies(3, 4, "Sniper", 7, 0, "Down");
		let L5Sniper5 = new Enemies(3, 12, "Sniper", 12, 0, "Right");
		let L5Sniper6 = new Enemies(7, 8, "Sniper", 7, 0, "Up");
		let L5Sniper7 = new Enemies(11, 4, "Sniper", 7, 0, "Down");
		let L5Sniper8 = new Enemies(15, 4, "Sniper", 8, 0, "Right");
		let L5Sniper9 = new Enemies(15, 19, "Sniper", 11, 0, "Up");
		let L5Sniper10 = new Enemies(19, 16, "Sniper", 11, 0, "Up");
		let L5Sniper11 = new Enemies(23, 8, "Sniper", 4, 0, "Right");
		let L5Sniper12 = new Enemies(23, 12, "Sniper", 4, 0, "Left");
		let L5Sniper13 = new Enemies(23, 19, "Sniper", 6, 0, "Up");
		EnemyList.push([
			L5Sniper1,
			L5Sniper2,
			L5Sniper3,
			L5Sniper4,
			L5Sniper5,
			L5Sniper6,
			L5Sniper7,
			L5Sniper8,
			L5Sniper9,
			L5Sniper10,
			L5Sniper11,
			L5Sniper12,
			L5Sniper13
		]);
		let L6Sniper1 = new Enemies(0, 0, "Sniper", 29, 0, "Right");
		let L6Sniper2 = new Enemies(27, 19, "Sniper", 19, 0, "Up");
		let L6Sniper3 = new Enemies(0, 16, "Sniper", 11, 0, "Right");
		let L6Sniper4 = new Enemies(3, 4, "Sniper", 7, 0, "Down");
		let L6Sniper5 = new Enemies(3, 12, "Sniper", 12, 0, "Right");
		let L6Sniper6 = new Enemies(7, 8, "Sniper", 7, 0, "Up");
		let L6Sniper7 = new Enemies(11, 4, "Sniper", 7, 0, "Down");
		let L6Sniper8 = new Enemies(15, 4, "Sniper", 8, 0, "Right");
		let L6Sniper9 = new Enemies(15, 19, "Sniper", 11, 0, "Up");
		let L6Sniper10 = new Enemies(19, 16, "Sniper", 11, 0, "Up");
		let L6Sniper11 = new Enemies(23, 8, "Sniper", 4, 0, "Right");
		let L6Sniper12 = new Enemies(23, 12, "Sniper", 4, 0, "Left");
		let L6Sniper13 = new Enemies(23, 19, "Sniper", 6, 0, "Up");
		let L6Area1 = new Enemies(1, 2, "Area", 1, 8, "H", 2);
		let L6Area2 = new Enemies(5, 18, "Area", 1, 14, "V", 2);
		let L6Area3 = new Enemies(9, 18, "Area", 1, 12, "H", 2);
		let L6Area4 = new Enemies(9, 14, "Area", 1, 9, "V", 1);
		let L6Area6 = new Enemies(13, 10, "Area", 1, 8, "H", 2);
		let L6Area7 = new Enemies(21, 6, "Area", 1, 8, "H", -2);
		let L6Area8 = new Enemies(25, 15, "Area", 1, 9, "V", 3);
		EnemyList.push([
			L6Sniper1,
			L6Sniper2,
			L6Sniper3,
			L6Sniper4,
			L6Sniper5,
			L6Sniper6,
			L6Sniper7,
			L6Sniper8,
			L6Sniper9,
			L6Sniper10,
			L6Sniper11,
			L6Sniper12,
			L6Sniper13,
			L6Area1,
			L6Area2,
			L6Area3,
			L6Area4,
			L6Area6,
			L6Area7,
			L6Area8
		]);
		let L7Area1 = new Enemies(5, 18, "Area", 1, 18, "V", 2);
		let L7Area2 = new Enemies(11, 18, "Area", 1, 18, "V", 2);
		let L7Area3 = new Enemies(17, 18, "Area", 1, 18, "V", 2);
		let L7Area4 = new Enemies(23, 18, "Area", 1, 18, "V", 2);
		let L7Area5 = new Enemies(8, 1, "Area", 1, 18, "V", -2);
		let L7Area6 = new Enemies(14, 1, "Area", 1, 18, "V", -2);
		let L7Area7 = new Enemies(20, 1, "Area", 1, 18, "V", -2);
		EnemyList.push([
			L7Area1,
			L7Area2,
			L7Area3,
			L7Area4,
			L7Area5,
			L7Area6,
			L7Area7
		]);
		let L8Sniper1 = new Enemies(29, 19, "Sniper", 29, 0, "Left");
		EnemyList.push([L8Sniper1]);
		let L9Sniper1 = new Enemies(29, 15, "Sniper", 29, 0, "Left");
		EnemyList.push([L9Sniper1]);
		let L10Boss1 = new Enemies(24, 2, "Boss", 17, 23, "H", -2);
		EnemyList.push([L10Boss1]);

		EnemyList.push([]);
		Levels.push(EnemyList);
	}
};
