import Blocks from "./blocks";

export default class LevelInit2 {
	LevelSetup2(Levels) {
		let L11Block1 = new Blocks(5, 0, "Block");
		let L11Block2 = new Blocks(7, 0, "Block");
		let L11Portal1 = new Blocks(8, 0, "Portal", "", "Portal", 10, 13);
		let L11Block3 = new Blocks(9, 0, "Block");
		let L11Block4 = new Blocks(11, 0, "Block");
		let L11Block5 = new Blocks(18, 0, "Block");
		let L11Block6 = new Blocks(20, 0, "Block");
		let L11Portal2 = new Blocks(21, 0, "Portal", "", "Portal", 23, 13);
		let L11Block7 = new Blocks(22, 0, "Block");
		let L11Block8 = new Blocks(24, 0, "Block");
		let L11Block9 = new Blocks(5, 1, "Block");
		let L11Block10 = new Blocks(11, 1, "Block");
		let L11Block11 = new Blocks(18, 1, "Block");
		let L11Block12 = new Blocks(24, 1, "Block");
		let L11Key1 = new Blocks(27, 1, "Key", "", "Key");
		let L11Block13 = new Blocks(5, 2, "Block");
		let L11Block14 = new Blocks(11, 2, "Block");
		let L11Block15 = new Blocks(18, 2, "Block");
		let L11Block16 = new Blocks(24, 2, "Block");
		let L11Portal3 = new Blocks(2, 3, "Portal", "", "Portal", 17, 13);
		let L11Block17 = new Blocks(5, 3, "Block");
		let L11Portal4 = new Blocks(6, 3, "Portal", "", "Portal", 12, 8);
		let L11Portal5 = new Blocks(10, 3, "Portal", "", "Portal", 27, 8);
		let L11Block18 = new Blocks(11, 3, "Block");
		let L11Portal6 = new Blocks(12, 3, "Portal", "", "Portal", 23, 8);
		let L11Portal7 = new Blocks(17, 3, "Portal", "", "Portal", 2, 8);
		let L11Block19 = new Blocks(18, 3, "Block");
		let L11Portal8 = new Blocks(19, 3, "Portal", "", "Portal", 12, 18);
		let L11Portal9 = new Blocks(23, 3, "Portal", "", "Portal", 27, 13);
		let L11Block20 = new Blocks(24, 3, "Block");
		let L11Portal10 = new Blocks(27, 3, "Portal", "", "Portal", 17, 8);
		let L11Block21 = new Blocks(0, 4, "Block");
		let L11Block22 = new Blocks(1, 4, "Block");
		let L11Block23 = new Blocks(2, 4, "Block");
		let L11Block24 = new Blocks(3, 4, "Block");
		let L11Block25 = new Blocks(4, 4, "Block");
		let L11Block26 = new Blocks(5, 4, "Block");
		let L11Block27 = new Blocks(6, 4, "Block");
		let L11Block28 = new Blocks(7, 4, "Block");
		let L11Block29 = new Blocks(8, 4, "Block");
		let L11Block30 = new Blocks(9, 4, "Block");
		let L11Block31 = new Blocks(10, 4, "Block");
		let L11Block32 = new Blocks(11, 4, "Block");
		let L11Block33 = new Blocks(12, 4, "Block");
		let L11Block34 = new Blocks(13, 4, "Block");
		let L11Block35 = new Blocks(14, 4, "Block");
		let L11Block36 = new Blocks(15, 4, "Block");
		let L11Block37 = new Blocks(16, 4, "Block");
		let L11Block38 = new Blocks(17, 4, "Block");
		let L11Block39 = new Blocks(18, 4, "Block");
		let L11Block40 = new Blocks(19, 4, "Block");
		let L11Block41 = new Blocks(20, 4, "Block");
		let L11Block42 = new Blocks(21, 4, "Block");
		let L11Block43 = new Blocks(22, 4, "Block");
		let L11Block44 = new Blocks(23, 4, "Block");
		let L11Block45 = new Blocks(24, 4, "Block");
		let L11Block46 = new Blocks(25, 4, "Block");
		let L11Block47 = new Blocks(26, 4, "Block");
		let L11Block48 = new Blocks(27, 4, "Block");
		let L11Block49 = new Blocks(28, 4, "Block");
		let L11Block50 = new Blocks(29, 4, "Block");
		let L11Block51 = new Blocks(5, 5, "Block");
		let L11Block52 = new Blocks(7, 5, "Block");
		let L11Portal11 = new Blocks(8, 5, "Portal", "", "Portal", 6, 13);
		let L11Block53 = new Blocks(9, 5, "Block");
		let L11Block54 = new Blocks(11, 5, "Block");
		let L11Block55 = new Blocks(18, 5, "Block");
		let L11Block56 = new Blocks(20, 5, "Block");
		let L11Portal12 = new Blocks(21, 5, "Portal", "", "Portal", 19, 13);
		let L11Block57 = new Blocks(22, 5, "Block");
		let L11Block58 = new Blocks(24, 5, "Block");
		let L11Block59 = new Blocks(5, 6, "Block");
		let L11Block60 = new Blocks(11, 6, "Block");
		let L11Block61 = new Blocks(18, 6, "Block");
		let L11Block62 = new Blocks(24, 6, "Block");
		let L11Block63 = new Blocks(5, 7, "Block");
		let L11Block64 = new Blocks(11, 7, "Block");
		let L11Block65 = new Blocks(18, 7, "Block");
		let L11Block66 = new Blocks(24, 7, "Block");
		let L11Portal13 = new Blocks(2, 8, "Portal", "", "Portal", 17, 3);
		let L11Block67 = new Blocks(5, 8, "Block");
		let L11Portal14 = new Blocks(6, 8, "Portal", "", "Portal", 12, 8);
		let L11Portal15 = new Blocks(10, 8, "Portal", "", "Portal", 12, 13);
		let L11Block68 = new Blocks(11, 8, "Block");
		let L11Portal16 = new Blocks(12, 8, "Portal", "", "Portal", 6, 8);
		let L11Portal17 = new Blocks(17, 8, "Portal", "", "Portal", 27, 3);
		let L11Block69 = new Blocks(18, 8, "Block");
		let L11Portal18 = new Blocks(19, 8, "Portal", "", "Portal", 27, 8);
		let L11Portal19 = new Blocks(23, 8, "Portal", "", "Portal", 21, 15);
		let L11Block70 = new Blocks(24, 8, "Block");
		let L11Portal20 = new Blocks(27, 8, "Portal", "", "Portal", 19, 8);
		let L11Block71 = new Blocks(0, 9, "Block");
		let L11Block72 = new Blocks(1, 9, "Block");
		let L11Block73 = new Blocks(2, 9, "Block");
		let L11Block74 = new Blocks(3, 9, "Block");
		let L11Block75 = new Blocks(4, 9, "Block");
		let L11Block76 = new Blocks(5, 9, "Block");
		let L11Block77 = new Blocks(6, 9, "Block");
		let L11Block78 = new Blocks(7, 9, "Block");
		let L11Block79 = new Blocks(8, 9, "Block");
		let L11Block80 = new Blocks(9, 9, "Block");
		let L11Block81 = new Blocks(10, 9, "Block");
		let L11Block82 = new Blocks(11, 9, "Block");
		let L11Block83 = new Blocks(12, 9, "Block");
		let L11Block84 = new Blocks(13, 9, "Block");
		let L11Block85 = new Blocks(14, 9, "Block");
		let L11Block86 = new Blocks(15, 9, "Block");
		let L11Block87 = new Blocks(16, 9, "Block");
		let L11Block88 = new Blocks(17, 9, "Block");
		let L11Block89 = new Blocks(18, 9, "Block");
		let L11Block90 = new Blocks(19, 9, "Block");
		let L11Block91 = new Blocks(20, 9, "Block");
		let L11Block92 = new Blocks(21, 9, "Block");
		let L11Block93 = new Blocks(22, 9, "Block");
		let L11Block94 = new Blocks(23, 9, "Block");
		let L11Block95 = new Blocks(24, 9, "Block");
		let L11Block96 = new Blocks(25, 9, "Block");
		let L11Block97 = new Blocks(26, 9, "Block");
		let L11Block98 = new Blocks(27, 9, "Block");
		let L11Block99 = new Blocks(28, 9, "Block");
		let L11Block100 = new Blocks(29, 9, "Block");
		let L11Block101 = new Blocks(5, 10, "Block");
		let L11Block102 = new Blocks(7, 10, "Block");
		let L11Portal21 = new Blocks(8, 10, "Portal", "", "Portal", 6, 18);
		let L11Block103 = new Blocks(9, 10, "Block");
		let L11Block104 = new Blocks(11, 10, "Block");
		let L11Block105 = new Blocks(18, 10, "Block");
		let L11Block106 = new Blocks(20, 10, "Block");
		let L11Portal22 = new Blocks(21, 10, "Portal", "", "Portal", 10, 18);
		let L11Block107 = new Blocks(22, 10, "Block");
		let L11Block108 = new Blocks(24, 10, "Block");
		let L11Block109 = new Blocks(5, 11, "Block");
		let L11Block110 = new Blocks(11, 11, "Block");
		let L11Block111 = new Blocks(18, 11, "Block");
		let L11Block112 = new Blocks(24, 11, "Block");
		let L11Block113 = new Blocks(5, 12, "Block");
		let L11Block114 = new Blocks(11, 12, "Block");
		let L11Block115 = new Blocks(18, 12, "Block");
		let L11Block116 = new Blocks(24, 12, "Block");
		let L11Portal23 = new Blocks(2, 13, "Portal", "", "Portal", 17, 13);
		let L11Block117 = new Blocks(5, 13, "Block");
		let L11Portal24 = new Blocks(6, 13, "Portal", "", "Portal", 8, 5);
		let L11Portal25 = new Blocks(10, 13, "Portal", "", "Portal", 8, 0);
		let L11Block118 = new Blocks(11, 13, "Block");
		let L11Portal26 = new Blocks(12, 13, "Portal", "", "Portal", 10, 8);
		let L11Portal27 = new Blocks(17, 13, "Portal", "", "Portal", 2, 13);
		let L11Block119 = new Blocks(18, 13, "Block");
		let L11Portal28 = new Blocks(19, 13, "Portal", "", "Portal", 21, 5);
		let L11Portal29 = new Blocks(23, 13, "Portal", "", "Portal", 21, 0);
		let L11Block120 = new Blocks(24, 13, "Block");
		let L11Portal30 = new Blocks(27, 13, "Portal", "", "Portal", 23, 3);
		let L11Block121 = new Blocks(0, 14, "Block");
		let L11Block122 = new Blocks(1, 14, "Block");
		let L11Block123 = new Blocks(2, 14, "Block");
		let L11Block124 = new Blocks(3, 14, "Block");
		let L11Block125 = new Blocks(4, 14, "Block");
		let L11Block126 = new Blocks(5, 14, "Block");
		let L11Block127 = new Blocks(6, 14, "Block");
		let L11Block128 = new Blocks(7, 14, "Block");
		let L11Block129 = new Blocks(8, 14, "Block");
		let L11Block130 = new Blocks(9, 14, "Block");
		let L11Block131 = new Blocks(10, 14, "Block");
		let L11Block132 = new Blocks(11, 14, "Block");
		let L11Block133 = new Blocks(12, 14, "Block");
		let L11Block134 = new Blocks(13, 14, "Block");
		let L11Block135 = new Blocks(14, 14, "Block");
		let L11Block136 = new Blocks(15, 14, "Block");
		let L11Block137 = new Blocks(16, 14, "Block");
		let L11Block138 = new Blocks(17, 14, "Block");
		let L11Block139 = new Blocks(18, 14, "Block");
		let L11Block140 = new Blocks(19, 14, "Block");
		let L11Block141 = new Blocks(20, 14, "Block");
		let L11Block142 = new Blocks(21, 14, "Block");
		let L11Block143 = new Blocks(22, 14, "Block");
		let L11Block144 = new Blocks(23, 14, "Block");
		let L11Block145 = new Blocks(24, 14, "Block");
		let L11Block146 = new Blocks(25, 14, "Block");
		let L11Block147 = new Blocks(26, 14, "Block");
		let L11Block148 = new Blocks(27, 14, "Block");
		let L11Block149 = new Blocks(28, 14, "Block");
		let L11Block150 = new Blocks(29, 14, "Block");
		let L11Block151 = new Blocks(5, 15, "Block");
		let L11Block152 = new Blocks(7, 15, "Block");
		let L11Portal31 = new Blocks(8, 15, "Portal", "", "Portal", 3, 18);
		let L11Block153 = new Blocks(9, 15, "Block");
		let L11Block154 = new Blocks(11, 15, "Block");
		let L11Block155 = new Blocks(18, 15, "Block");
		let L11Block156 = new Blocks(20, 15, "Block");
		let L11Portal32 = new Blocks(21, 15, "Portal", "", "Portal", 23, 8);
		let L11Block157 = new Blocks(22, 15, "Block");
		let L11Block158 = new Blocks(24, 15, "Block");
		let L11Block159 = new Blocks(5, 16, "Block");
		let L11Block160 = new Blocks(11, 16, "Block");
		let L11Block161 = new Blocks(18, 16, "Block");
		let L11Block162 = new Blocks(24, 16, "Block");
		let L11Block163 = new Blocks(5, 17, "Block");
		let L11Block164 = new Blocks(11, 17, "Block");
		let L11Block165 = new Blocks(18, 17, "Block");
		let L11Block166 = new Blocks(24, 17, "Block");
		let L11Portal33 = new Blocks(3, 18, "Portal", "", "Portal", 8, 15);
		let L11Block167 = new Blocks(5, 18, "Block");
		let L11Portal34 = new Blocks(6, 18, "Portal", "", "Portal", 8, 10);
		let L11Portal35 = new Blocks(10, 18, "Portal", "", "Portal", 21, 10);
		let L11Block168 = new Blocks(11, 18, "Block");
		let L11Portal36 = new Blocks(12, 18, "Portal", "", "Portal", 19, 3);
		let L11LockedPortal1 = new Blocks(
			17,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			26,
			18
		);
		let L11Block169 = new Blocks(18, 18, "Block");
		let L11Portal37 = new Blocks(19, 18, "Portal", "", "Portal", 23, 18);
		let L11Portal38 = new Blocks(23, 18, "Portal", "", "Portal", 19, 18);
		let L11Block170 = new Blocks(24, 18, "Block");
		let L11LockedPortal2 = new Blocks(
			26,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			17,
			18
		);
		let L11Block171 = new Blocks(0, 19, "Block");
		let L11Block172 = new Blocks(1, 19, "Block");
		let L11Block173 = new Blocks(2, 19, "Block");
		let L11Block174 = new Blocks(3, 19, "Block");
		let L11Block175 = new Blocks(4, 19, "Block");
		let L11Block176 = new Blocks(5, 19, "Block");
		let L11Block177 = new Blocks(6, 19, "Block");
		let L11Block178 = new Blocks(7, 19, "Block");
		let L11Block179 = new Blocks(8, 19, "Block");
		let L11Block180 = new Blocks(9, 19, "Block");
		let L11Block181 = new Blocks(10, 19, "Block");
		let L11Block182 = new Blocks(11, 19, "Block");
		let L11Block183 = new Blocks(12, 19, "Block");
		let L11Block184 = new Blocks(13, 19, "Block");
		let L11Block185 = new Blocks(14, 19, "Block");
		let L11Block186 = new Blocks(15, 19, "Block");
		let L11Block187 = new Blocks(16, 19, "Block");
		let L11Block188 = new Blocks(17, 19, "Block");
		let L11Block189 = new Blocks(18, 19, "Block");
		let L11Block190 = new Blocks(19, 19, "Block");
		let L11Block191 = new Blocks(20, 19, "Block");
		let L11Block192 = new Blocks(21, 19, "Block");
		let L11Block193 = new Blocks(22, 19, "Block");
		let L11Block194 = new Blocks(23, 19, "Block");
		let L11Block195 = new Blocks(24, 19, "Block");
		let L11Block196 = new Blocks(25, 19, "Block");
		let L11Block197 = new Blocks(26, 19, "Block");
		let L11Block198 = new Blocks(27, 19, "Block");
		let L11Block199 = new Blocks(28, 19, "Block");
		let L11Block200 = new Blocks(29, 19, "Block");
		let L11Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L11Block1,
			L11Block2,
			L11Portal1,
			L11Block3,
			L11Block4,
			L11Block5,
			L11Block6,
			L11Portal2,
			L11Block7,
			L11Block8,
			L11Block9,
			L11Block10,
			L11Block11,
			L11Block12,
			L11Key1,
			L11Block13,
			L11Block14,
			L11Block15,
			L11Block16,
			L11Portal3,
			L11Block17,
			L11Portal4,
			L11Portal5,
			L11Block18,
			L11Portal6,
			L11Portal7,
			L11Block19,
			L11Portal8,
			L11Portal9,
			L11Block20,
			L11Portal10,
			L11Block21,
			L11Block22,
			L11Block23,
			L11Block24,
			L11Block25,
			L11Block26,
			L11Block27,
			L11Block28,
			L11Block29,
			L11Block30,
			L11Block31,
			L11Block32,
			L11Block33,
			L11Block34,
			L11Block35,
			L11Block36,
			L11Block37,
			L11Block38,
			L11Block39,
			L11Block40,
			L11Block41,
			L11Block42,
			L11Block43,
			L11Block44,
			L11Block45,
			L11Block46,
			L11Block47,
			L11Block48,
			L11Block49,
			L11Block50,
			L11Block51,
			L11Block52,
			L11Portal11,
			L11Block53,
			L11Block54,
			L11Block55,
			L11Block56,
			L11Portal12,
			L11Block57,
			L11Block58,
			L11Block59,
			L11Block60,
			L11Block61,
			L11Block62,
			L11Block63,
			L11Block64,
			L11Block65,
			L11Block66,
			L11Portal13,
			L11Block67,
			L11Portal14,
			L11Portal15,
			L11Block68,
			L11Portal16,
			L11Portal17,
			L11Block69,
			L11Portal18,
			L11Portal19,
			L11Block70,
			L11Portal20,
			L11Block71,
			L11Block72,
			L11Block73,
			L11Block74,
			L11Block75,
			L11Block76,
			L11Block77,
			L11Block78,
			L11Block79,
			L11Block80,
			L11Block81,
			L11Block82,
			L11Block83,
			L11Block84,
			L11Block85,
			L11Block86,
			L11Block87,
			L11Block88,
			L11Block89,
			L11Block90,
			L11Block91,
			L11Block92,
			L11Block93,
			L11Block94,
			L11Block95,
			L11Block96,
			L11Block97,
			L11Block98,
			L11Block99,
			L11Block100,
			L11Block101,
			L11Block102,
			L11Portal21,
			L11Block103,
			L11Block104,
			L11Block105,
			L11Block106,
			L11Portal22,
			L11Block107,
			L11Block108,
			L11Block109,
			L11Block110,
			L11Block111,
			L11Block112,
			L11Block113,
			L11Block114,
			L11Block115,
			L11Block116,
			L11Portal23,
			L11Block117,
			L11Portal24,
			L11Portal25,
			L11Block118,
			L11Portal26,
			L11Portal27,
			L11Block119,
			L11Portal28,
			L11Portal29,
			L11Block120,
			L11Portal30,
			L11Block121,
			L11Block122,
			L11Block123,
			L11Block124,
			L11Block125,
			L11Block126,
			L11Block127,
			L11Block128,
			L11Block129,
			L11Block130,
			L11Block131,
			L11Block132,
			L11Block133,
			L11Block134,
			L11Block135,
			L11Block136,
			L11Block137,
			L11Block138,
			L11Block139,
			L11Block140,
			L11Block141,
			L11Block142,
			L11Block143,
			L11Block144,
			L11Block145,
			L11Block146,
			L11Block147,
			L11Block148,
			L11Block149,
			L11Block150,
			L11Block151,
			L11Block152,
			L11Portal31,
			L11Block153,
			L11Block154,
			L11Block155,
			L11Block156,
			L11Portal32,
			L11Block157,
			L11Block158,
			L11Block159,
			L11Block160,
			L11Block161,
			L11Block162,
			L11Block163,
			L11Block164,
			L11Block165,
			L11Block166,
			L11Portal33,
			L11Block167,
			L11Portal34,
			L11Portal35,
			L11Block168,
			L11Portal36,
			L11LockedPortal1,
			L11Block169,
			L11Portal37,
			L11Portal38,
			L11Block170,
			L11LockedPortal2,
			L11Block171,
			L11Block172,
			L11Block173,
			L11Block174,
			L11Block175,
			L11Block176,
			L11Block177,
			L11Block178,
			L11Block179,
			L11Block180,
			L11Block181,
			L11Block182,
			L11Block183,
			L11Block184,
			L11Block185,
			L11Block186,
			L11Block187,
			L11Block188,
			L11Block189,
			L11Block190,
			L11Block191,
			L11Block192,
			L11Block193,
			L11Block194,
			L11Block195,
			L11Block196,
			L11Block197,
			L11Block198,
			L11Block199,
			L11Block200,
			L11Flag
		]);
		let L12Block1 = new Blocks(15, 0, "Block");
		let L12Block2 = new Blocks(17, 0, "Block");
		let L12Block3 = new Blocks(15, 1, "Block");
		let L12Block4 = new Blocks(17, 1, "Block");
		let L12Block5 = new Blocks(15, 2, "Block");
		let L12Block6 = new Blocks(17, 2, "Block");
		let L12Block7 = new Blocks(15, 3, "Block");
		let L12Block8 = new Blocks(17, 3, "Block");
		let L12Block9 = new Blocks(15, 4, "Block");
		let L12Block10 = new Blocks(17, 4, "Block");
		let L12Block11 = new Blocks(15, 5, "Block");
		let L12Block12 = new Blocks(17, 5, "Block");
		let L12Block13 = new Blocks(0, 6, "Block");
		let L12Block14 = new Blocks(1, 6, "Block");
		let L12Block15 = new Blocks(2, 6, "Block");
		let L12Block16 = new Blocks(3, 6, "Block");
		let L12Block17 = new Blocks(4, 6, "Block");
		let L12Block18 = new Blocks(5, 6, "Block");
		let L12Block19 = new Blocks(15, 6, "Block");
		let L12Block20 = new Blocks(17, 6, "Block");
		let L12Block21 = new Blocks(5, 7, "Block");
		let L12Block22 = new Blocks(15, 7, "Block");
		let L12Block23 = new Blocks(17, 7, "Block");
		let L12Block24 = new Blocks(24, 7, "Block");
		let L12Block25 = new Blocks(25, 7, "Block");
		let L12Block26 = new Blocks(26, 7, "Block");
		let L12Block27 = new Blocks(27, 7, "Block");
		let L12Block28 = new Blocks(28, 7, "Block");
		let L12Block29 = new Blocks(29, 7, "Block");
		let L12Key1 = new Blocks(2, 8, "Key", "", "Key");
		let L12Block30 = new Blocks(5, 8, "Block");
		let L12Block31 = new Blocks(15, 8, "Block");
		let L12Block32 = new Blocks(17, 8, "Block");
		let L12Block33 = new Blocks(24, 8, "Block");
		let L12Block34 = new Blocks(29, 8, "Block");
		let L12Block35 = new Blocks(5, 9, "Block");
		let L12Block36 = new Blocks(15, 9, "Block");
		let L12Key2 = new Blocks(16, 9, "Key", "", "Key");
		let L12Block37 = new Blocks(17, 9, "Block");
		let L12Block38 = new Blocks(24, 9, "Block");
		let L12Portal1 = new Blocks(28, 9, "Portal", "", "Portal", 16, 10);
		let L12Block39 = new Blocks(29, 9, "Block");
		let L12Portal2 = new Blocks(2, 10, "Portal", "", "Portal", 3, 18);
		let L12Block40 = new Blocks(5, 10, "Block");
		let L12Block41 = new Blocks(15, 10, "Block");
		let L12Portal3 = new Blocks(16, 10, "Portal", "", "Portal", 28, 9);
		let L12Block42 = new Blocks(17, 10, "Block");
		let L12Block43 = new Blocks(24, 10, "Block");
		let L12LockedPortal1 = new Blocks(
			25,
			10,
			"LockedPortal",
			"",
			"LockedPortal",
			0,
			18
		);
		let L12Block44 = new Blocks(27, 10, "Block");
		let L12Block45 = new Blocks(29, 10, "Block");
		let L12Block46 = new Blocks(5, 11, "Block");
		let L12Block47 = new Blocks(15, 11, "Block");
		let L12Block48 = new Blocks(17, 11, "Block");
		let L12Block49 = new Blocks(24, 11, "Block");
		let L12Block50 = new Blocks(25, 11, "Block");
		let L12Block51 = new Blocks(26, 11, "Block");
		let L12Block52 = new Blocks(27, 11, "Block");
		let L12Block53 = new Blocks(29, 11, "Block");
		let L12Lava1 = new Blocks(0, 12, "Lava");
		let L12Lava2 = new Blocks(1, 12, "Lava");
		let L12Lava3 = new Blocks(2, 12, "Lava");
		let L12Lava4 = new Blocks(3, 12, "Lava");
		let L12Lava5 = new Blocks(4, 12, "Lava");
		let L12Block54 = new Blocks(5, 12, "Block");
		let L12Block55 = new Blocks(15, 12, "Block");
		let L12Block56 = new Blocks(17, 12, "Block");
		let L12Block57 = new Blocks(27, 12, "Block");
		let L12LockedPortal2 = new Blocks(
			28,
			12,
			"LockedPortal",
			"",
			"LockedPortal",
			16,
			13
		);
		let L12Block58 = new Blocks(29, 12, "Block");
		let L12Block59 = new Blocks(0, 13, "Block");
		let L12Block60 = new Blocks(1, 13, "Block");
		let L12Block61 = new Blocks(2, 13, "Block");
		let L12Block62 = new Blocks(3, 13, "Block");
		let L12Block63 = new Blocks(4, 13, "Block");
		let L12Block64 = new Blocks(5, 13, "Block");
		let L12Block65 = new Blocks(15, 13, "Block");
		let L12LockedPortal3 = new Blocks(
			16,
			13,
			"LockedPortal",
			"",
			"LockedPortal",
			28,
			12
		);
		let L12Block66 = new Blocks(17, 13, "Block");
		let L12Block67 = new Blocks(27, 13, "Block");
		let L12Block68 = new Blocks(29, 13, "Block");
		let L12LockedPortal4 = new Blocks(
			0,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			25,
			10
		);
		let L12Block69 = new Blocks(5, 14, "Block");
		let L12Block70 = new Blocks(15, 14, "Block");
		let L12Block71 = new Blocks(17, 14, "Block");
		let L12Block72 = new Blocks(27, 14, "Block");
		let L12Block73 = new Blocks(29, 14, "Block");
		let L12Block74 = new Blocks(5, 15, "Block");
		let L12Block75 = new Blocks(15, 15, "Block");
		let L12Block76 = new Blocks(17, 15, "Block");
		let L12Block77 = new Blocks(27, 15, "Block");
		let L12Block78 = new Blocks(29, 15, "Block");
		let L12Block79 = new Blocks(5, 16, "Block");
		let L12Block80 = new Blocks(15, 16, "Block");
		let L12Block81 = new Blocks(17, 16, "Block");
		let L12Block82 = new Blocks(27, 16, "Block");
		let L12Block83 = new Blocks(29, 16, "Block");
		let L12Block84 = new Blocks(5, 17, "Block");
		let L12Block85 = new Blocks(15, 17, "Block");
		let L12Block86 = new Blocks(17, 17, "Block");
		let L12Block87 = new Blocks(27, 17, "Block");
		let L12Block88 = new Blocks(29, 17, "Block");
		let L12Portal4 = new Blocks(3, 18, "Portal", "", "Portal", 2, 10);
		let L12Block89 = new Blocks(5, 18, "Block");
		let L12Block90 = new Blocks(15, 18, "Block");
		let L12Block91 = new Blocks(17, 18, "Block");
		let L12Block92 = new Blocks(27, 18, "Block");
		let L12Block93 = new Blocks(29, 18, "Block");
		let L12Block94 = new Blocks(0, 19, "Block");
		let L12Block95 = new Blocks(1, 19, "Block");
		let L12Block96 = new Blocks(2, 19, "Block");
		let L12Block97 = new Blocks(3, 19, "Block");
		let L12Block98 = new Blocks(4, 19, "Block");
		let L12Block99 = new Blocks(5, 19, "Block");
		let L12Lava6 = new Blocks(15, 19, "Lava");
		let L12Lava7 = new Blocks(16, 19, "Lava");
		let L12Lava8 = new Blocks(17, 19, "Lava");
		let L12Block100 = new Blocks(27, 19, "Block");
		let L12Block101 = new Blocks(28, 19, "Block");
		let L12Block102 = new Blocks(29, 19, "Block");
		let L12Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L12Block1,
			L12Block2,
			L12Block3,
			L12Block4,
			L12Block5,
			L12Block6,
			L12Block7,
			L12Block8,
			L12Block9,
			L12Block10,
			L12Block11,
			L12Block12,
			L12Block13,
			L12Block14,
			L12Block15,
			L12Block16,
			L12Block17,
			L12Block18,
			L12Block19,
			L12Block20,
			L12Block21,
			L12Block22,
			L12Block23,
			L12Block24,
			L12Block25,
			L12Block26,
			L12Block27,
			L12Block28,
			L12Block29,
			L12Key1,
			L12Block30,
			L12Block31,
			L12Block32,
			L12Block33,
			L12Block34,
			L12Block35,
			L12Block36,
			L12Key2,
			L12Block37,
			L12Block38,
			L12Portal1,
			L12Block39,
			L12Portal2,
			L12Block40,
			L12Block41,
			L12Portal3,
			L12Block42,
			L12Block43,
			L12LockedPortal1,
			L12Block44,
			L12Block45,
			L12Block46,
			L12Block47,
			L12Block48,
			L12Block49,
			L12Block50,
			L12Block51,
			L12Block52,
			L12Block53,
			L12Lava1,
			L12Lava2,
			L12Lava3,
			L12Lava4,
			L12Lava5,
			L12Block54,
			L12Block55,
			L12Block56,
			L12Block57,
			L12LockedPortal2,
			L12Block58,
			L12Block59,
			L12Block60,
			L12Block61,
			L12Block62,
			L12Block63,
			L12Block64,
			L12Block65,
			L12LockedPortal3,
			L12Block66,
			L12Block67,
			L12Block68,
			L12LockedPortal4,
			L12Block69,
			L12Block70,
			L12Block71,
			L12Block72,
			L12Block73,
			L12Block74,
			L12Block75,
			L12Block76,
			L12Block77,
			L12Block78,
			L12Block79,
			L12Block80,
			L12Block81,
			L12Block82,
			L12Block83,
			L12Block84,
			L12Block85,
			L12Block86,
			L12Block87,
			L12Block88,
			L12Portal4,
			L12Block89,
			L12Block90,
			L12Block91,
			L12Block92,
			L12Block93,
			L12Block94,
			L12Block95,
			L12Block96,
			L12Block97,
			L12Block98,
			L12Block99,
			L12Lava6,
			L12Lava7,
			L12Lava8,
			L12Block100,
			L12Block101,
			L12Block102,
			L12Flag
		]);
		let L13Key1 = new Blocks(0, 0, "Key", "", "Key");
		let L13LockedPortal1 = new Blocks(
			24,
			0,
			"LockedPortal",
			"",
			"LockedPortal",
			24,
			3
		);
		let L13Lava1 = new Blocks(26, 0, "Lava");
		let L13Red1 = new Blocks(0, 1, "Blue");
		let L13Block1 = new Blocks(22, 1, "Block");
		let L13Platform1 = new Blocks(23, 1, "Platform");
		let L13Platform2 = new Blocks(24, 1, "Platform");
		let L13Platform3 = new Blocks(25, 1, "Platform");
		let L13Lava2 = new Blocks(26, 1, "Lava");
		let L13Lava3 = new Blocks(22, 2, "Lava");
		let L13Lava4 = new Blocks(26, 2, "Lava");
		let L13Lava5 = new Blocks(22, 3, "Lava");
		let L13LockedPortal2 = new Blocks(
			24,
			3,
			"LockedPortal",
			"",
			"LockedPortal",
			24,
			0
		);
		let L13Lava6 = new Blocks(26, 3, "Lava");
		let L13Red2 = new Blocks(0, 4, "Red");
		let L13Red3 = new Blocks(19, 4, "Red");
		let L13Red4 = new Blocks(20, 4, "Red");
		let L13Red5 = new Blocks(21, 4, "Red");
		let L13Lava7 = new Blocks(22, 4, "Lava");
		let L13Red6 = new Blocks(23, 4, "Red");
		let L13Red7 = new Blocks(24, 4, "Red");
		let L13Red8 = new Blocks(25, 4, "Red");
		let L13Lava8 = new Blocks(26, 4, "Lava");
		let L13Lava9 = new Blocks(22, 5, "Lava");
		let L13Lava10 = new Blocks(26, 5, "Lava");
		let L13Lava11 = new Blocks(22, 6, "Lava");
		let L13Lava12 = new Blocks(26, 6, "Lava");
		let L13Red9 = new Blocks(0, 7, "Blue");
		let L13Red10 = new Blocks(15, 7, "Blue");
		let L13Red11 = new Blocks(16, 7, "Blue");
		let L13Red12 = new Blocks(17, 7, "Blue");
		let L13Lava13 = new Blocks(22, 7, "Lava");
		let L13Lava14 = new Blocks(26, 7, "Lava");
		let L13Lava15 = new Blocks(22, 8, "Lava");
		let L13Lava16 = new Blocks(26, 8, "Lava");
		let L13Lava17 = new Blocks(22, 9, "Lava");
		let L13Lava18 = new Blocks(26, 9, "Lava");
		let L13Red13 = new Blocks(0, 10, "Red");
		let L13Red14 = new Blocks(11, 10, "Red");
		let L13Red15 = new Blocks(12, 10, "Red");
		let L13Red16 = new Blocks(13, 10, "Red");
		let L13Lava19 = new Blocks(22, 10, "Lava");
		let L13Lava20 = new Blocks(26, 10, "Lava");
		let L13Lava21 = new Blocks(22, 11, "Lava");
		let L13Lava22 = new Blocks(26, 11, "Lava");
		let L13Lava23 = new Blocks(22, 12, "Lava");
		let L13Lava24 = new Blocks(26, 12, "Lava");
		let L13Red17 = new Blocks(0, 13, "Blue");
		let L13Red18 = new Blocks(7, 13, "Blue");
		let L13Red19 = new Blocks(8, 13, "Blue");
		let L13Red20 = new Blocks(9, 13, "Blue");
		let L13Lava25 = new Blocks(22, 13, "Lava");
		let L13Lava26 = new Blocks(26, 13, "Lava");
		let L13Lava27 = new Blocks(22, 14, "Lava");
		let L13Lava28 = new Blocks(26, 14, "Lava");
		let L13Lava29 = new Blocks(22, 15, "Lava");
		let L13Red21 = new Blocks(26, 15, "Red");
		let L13Red22 = new Blocks(0, 16, "Red");
		let L13Red23 = new Blocks(3, 16, "Red");
		let L13Red24 = new Blocks(4, 16, "Red");
		let L13Red25 = new Blocks(5, 16, "Red");
		let L13Lava30 = new Blocks(22, 16, "Lava");
		let L13Red26 = new Blocks(26, 16, "Red");
		let L13Lava31 = new Blocks(22, 17, "Lava");
		let L13Red27 = new Blocks(26, 17, "Red");
		let L13Lava32 = new Blocks(22, 18, "Lava");
		let L13Red28 = new Blocks(26, 18, "Red");
		let L13Block2 = new Blocks(0, 19, "Block");
		let L13Block3 = new Blocks(1, 19, "Block");
		let L13Block4 = new Blocks(2, 19, "Block");
		let L13Lava33 = new Blocks(22, 19, "Lava");
		let L13Red29 = new Blocks(23, 19, "Red");
		let L13Red30 = new Blocks(24, 19, "Red");
		let L13Red31 = new Blocks(25, 19, "Red");
		let L13Red32 = new Blocks(26, 19, "Red");
		let L13Red33 = new Blocks(27, 19, "Red");
		let L13Red34 = new Blocks(28, 19, "Red");
		let L13Red35 = new Blocks(29, 19, "Red");
		let L13Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L13Key1,
			L13LockedPortal1,
			L13Lava1,
			L13Red1,
			L13Block1,
			L13Platform1,
			L13Platform2,
			L13Platform3,
			L13Lava2,
			L13Lava3,
			L13Lava4,
			L13Lava5,
			L13LockedPortal2,
			L13Lava6,
			L13Red2,
			L13Red3,
			L13Red4,
			L13Red5,
			L13Lava7,
			L13Red6,
			L13Red7,
			L13Red8,
			L13Lava8,
			L13Lava9,
			L13Lava10,
			L13Lava11,
			L13Lava12,
			L13Red9,
			L13Red10,
			L13Red11,
			L13Red12,
			L13Lava13,
			L13Lava14,
			L13Lava15,
			L13Lava16,
			L13Lava17,
			L13Lava18,
			L13Red13,
			L13Red14,
			L13Red15,
			L13Red16,
			L13Lava19,
			L13Lava20,
			L13Lava21,
			L13Lava22,
			L13Lava23,
			L13Lava24,
			L13Red17,
			L13Red18,
			L13Red19,
			L13Red20,
			L13Lava25,
			L13Lava26,
			L13Lava27,
			L13Lava28,
			L13Lava29,
			L13Red21,
			L13Red22,
			L13Red23,
			L13Red24,
			L13Red25,
			L13Lava30,
			L13Red26,
			L13Lava31,
			L13Red27,
			L13Lava32,
			L13Red28,
			L13Block2,
			L13Block3,
			L13Block4,
			L13Lava33,
			L13Red29,
			L13Red30,
			L13Red31,
			L13Red32,
			L13Red33,
			L13Red34,
			L13Red35,
			L13Flag
		]);
		let L14Blue1 = new Blocks(3, 0, "Blue");
		let L14Red1 = new Blocks(10, 0, "Red");
		let L14Red2 = new Blocks(11, 0, "Red");
		let L14Blue2 = new Blocks(14, 0, "Blue");
		let L14Block1 = new Blocks(17, 0, "Block");
		let L14Blue3 = new Blocks(3, 1, "Blue");
		let L14Red3 = new Blocks(4, 1, "Blue");
		let L14Red4 = new Blocks(5, 1, "Blue");
		let L14Red5 = new Blocks(6, 1, "Blue");
		let L14Block2 = new Blocks(7, 1, "Block");
		let L14Red6 = new Blocks(10, 1, "Red");
		let L14Red7 = new Blocks(11, 1, "Red");
		let L14Blue4 = new Blocks(14, 1, "Blue");
		let L14Block3 = new Blocks(17, 1, "Block");
		let L14Red8 = new Blocks(22, 1, "Red");
		let L14Block4 = new Blocks(26, 1, "Block");
		let L14Blue5 = new Blocks(3, 2, "Red");
		let L14Block5 = new Blocks(7, 2, "Block");
		let L14Red9 = new Blocks(10, 2, "Red");
		let L14Red10 = new Blocks(11, 2, "Red");
		let L14Blue6 = new Blocks(14, 2, "Blue");
		let L14Block6 = new Blocks(17, 2, "Block");
		let L14Blue7 = new Blocks(19, 2, "Blue");
		let L14Blue8 = new Blocks(24, 2, "Blue");
		let L14Block7 = new Blocks(26, 2, "Block");
		let L14Blue9 = new Blocks(3, 3, "Red");
		let L14Block8 = new Blocks(7, 3, "Block");
		let L14Red11 = new Blocks(8, 3, "Red");
		let L14Red12 = new Blocks(9, 3, "Red");
		let L14Red13 = new Blocks(10, 3, "Red");
		let L14Red14 = new Blocks(11, 3, "Red");
		let L14Red15 = new Blocks(12, 3, "Red");
		let L14Red16 = new Blocks(13, 3, "Red");
		let L14Block9 = new Blocks(14, 3, "Block");
		let L14Block10 = new Blocks(15, 3, "Block");
		let L14Block11 = new Blocks(17, 3, "Block");
		let L14Block12 = new Blocks(26, 3, "Block");
		let L14Red17 = new Blocks(0, 4, "Red");
		let L14Red18 = new Blocks(1, 4, "Red");
		let L14Red19 = new Blocks(2, 4, "Red");
		let L14Blue10 = new Blocks(3, 4, "Red");
		let L14Block13 = new Blocks(7, 4, "Block");
		let L14Purple1 = new Blocks(14, 4, "Purple");
		let L14Purple2 = new Blocks(15, 4, "Purple");
		let L14Block14 = new Blocks(17, 4, "Block");
		let L14Blue11 = new Blocks(20, 4, "Blue");
		let L14Block15 = new Blocks(26, 4, "Block");
		let L14Blue12 = new Blocks(3, 5, "Blue");
		let L14Block16 = new Blocks(7, 5, "Block");
		let L14Purple3 = new Blocks(14, 5, "Purple");
		let L14Purple4 = new Blocks(15, 5, "Purple");
		let L14Block17 = new Blocks(17, 5, "Block");
		let L14Red20 = new Blocks(18, 5, "Red");
		let L14Red21 = new Blocks(23, 5, "Red");
		let L14Block18 = new Blocks(26, 5, "Block");
		let L14Blue13 = new Blocks(3, 6, "Blue");
		let L14Block19 = new Blocks(7, 6, "Block");
		let L14Blue14 = new Blocks(8, 6, "Blue");
		let L14Blue15 = new Blocks(9, 6, "Blue");
		let L14Blue16 = new Blocks(10, 6, "Blue");
		let L14Blue17 = new Blocks(11, 6, "Blue");
		let L14Blue18 = new Blocks(12, 6, "Blue");
		let L14Blue19 = new Blocks(13, 6, "Blue");
		let L14Purple5 = new Blocks(14, 6, "Purple");
		let L14Purple6 = new Blocks(15, 6, "Purple");
		let L14Block20 = new Blocks(17, 6, "Block");
		let L14Blue20 = new Blocks(25, 6, "Blue");
		let L14Block21 = new Blocks(26, 6, "Block");
		let L14Blue21 = new Blocks(3, 7, "Blue");
		let L14Red22 = new Blocks(4, 7, "Blue");
		let L14Red23 = new Blocks(5, 7, "Blue");
		let L14Red24 = new Blocks(6, 7, "Blue");
		let L14Block22 = new Blocks(7, 7, "Block");
		let L14Purple7 = new Blocks(14, 7, "Purple");
		let L14Purple8 = new Blocks(15, 7, "Purple");
		let L14Block23 = new Blocks(17, 7, "Block");
		let L14Red25 = new Blocks(20, 7, "Red");
		let L14Block24 = new Blocks(26, 7, "Block");
		let L14Blue22 = new Blocks(3, 8, "Red");
		let L14Block25 = new Blocks(7, 8, "Block");
		let L14Purple9 = new Blocks(14, 8, "Purple");
		let L14Purple10 = new Blocks(15, 8, "Purple");
		let L14Block26 = new Blocks(17, 8, "Block");
		let L14Blue23 = new Blocks(22, 8, "Blue");
		let L14Red26 = new Blocks(24, 8, "Red");
		let L14Block27 = new Blocks(26, 8, "Block");
		let L14Blue24 = new Blocks(3, 9, "Red");
		let L14Block28 = new Blocks(7, 9, "Block");
		let L14Red27 = new Blocks(8, 9, "Red");
		let L14Red28 = new Blocks(9, 9, "Red");
		let L14Red29 = new Blocks(10, 9, "Red");
		let L14Red30 = new Blocks(11, 9, "Red");
		let L14Red31 = new Blocks(12, 9, "Red");
		let L14Red32 = new Blocks(13, 9, "Red");
		let L14Purple11 = new Blocks(14, 9, "Purple");
		let L14Purple12 = new Blocks(15, 9, "Purple");
		let L14Block29 = new Blocks(17, 9, "Block");
		let L14Blue25 = new Blocks(19, 9, "Blue");
		let L14Block30 = new Blocks(26, 9, "Block");
		let L14Red33 = new Blocks(0, 10, "Red");
		let L14Red34 = new Blocks(1, 10, "Red");
		let L14Red35 = new Blocks(2, 10, "Red");
		let L14Blue26 = new Blocks(3, 10, "Red");
		let L14Block31 = new Blocks(7, 10, "Block");
		let L14Purple13 = new Blocks(14, 10, "Purple");
		let L14Purple14 = new Blocks(15, 10, "Purple");
		let L14Block32 = new Blocks(17, 10, "Block");
		let L14Red36 = new Blocks(21, 10, "Red");
		let L14Block33 = new Blocks(26, 10, "Block");
		let L14Blue27 = new Blocks(3, 11, "Blue");
		let L14Block34 = new Blocks(7, 11, "Block");
		let L14Purple15 = new Blocks(14, 11, "Purple");
		let L14Purple16 = new Blocks(15, 11, "Purple");
		let L14Block35 = new Blocks(17, 11, "Block");
		let L14Red37 = new Blocks(24, 11, "Red");
		let L14Block36 = new Blocks(26, 11, "Block");
		let L14Blue28 = new Blocks(3, 12, "Blue");
		let L14Block37 = new Blocks(7, 12, "Block");
		let L14Blue29 = new Blocks(8, 12, "Blue");
		let L14Blue30 = new Blocks(9, 12, "Blue");
		let L14Blue31 = new Blocks(10, 12, "Blue");
		let L14Blue32 = new Blocks(11, 12, "Blue");
		let L14Blue33 = new Blocks(12, 12, "Blue");
		let L14Blue34 = new Blocks(13, 12, "Blue");
		let L14Purple17 = new Blocks(14, 12, "Purple");
		let L14Purple18 = new Blocks(15, 12, "Purple");
		let L14Block38 = new Blocks(17, 12, "Block");
		let L14Block39 = new Blocks(26, 12, "Block");
		let L14Blue35 = new Blocks(3, 13, "Blue");
		let L14Red38 = new Blocks(4, 13, "Blue");
		let L14Red39 = new Blocks(5, 13, "Blue");
		let L14Red40 = new Blocks(6, 13, "Blue");
		let L14Block40 = new Blocks(7, 13, "Block");
		let L14Purple19 = new Blocks(14, 13, "Purple");
		let L14Purple20 = new Blocks(15, 13, "Purple");
		let L14Block41 = new Blocks(17, 13, "Block");
		let L14Blue36 = new Blocks(19, 13, "Blue");
		let L14Red41 = new Blocks(21, 13, "Red");
		let L14Block42 = new Blocks(26, 13, "Block");
		let L14Blue37 = new Blocks(3, 14, "Red");
		let L14Block43 = new Blocks(7, 14, "Block");
		let L14Purple21 = new Blocks(14, 14, "Purple");
		let L14Purple22 = new Blocks(15, 14, "Purple");
		let L14Block44 = new Blocks(17, 14, "Block");
		let L14Blue38 = new Blocks(23, 14, "Blue");
		let L14Block45 = new Blocks(26, 14, "Block");
		let L14Blue39 = new Blocks(3, 15, "Red");
		let L14Block46 = new Blocks(7, 15, "Block");
		let L14Red42 = new Blocks(8, 15, "Red");
		let L14Red43 = new Blocks(9, 15, "Red");
		let L14Red44 = new Blocks(10, 15, "Red");
		let L14Red45 = new Blocks(11, 15, "Red");
		let L14Red46 = new Blocks(12, 15, "Red");
		let L14Red47 = new Blocks(13, 15, "Red");
		let L14Purple23 = new Blocks(14, 15, "Purple");
		let L14Purple24 = new Blocks(15, 15, "Purple");
		let L14Block47 = new Blocks(17, 15, "Block");
		let L14Block48 = new Blocks(26, 15, "Block");
		let L14Red48 = new Blocks(0, 16, "Red");
		let L14Red49 = new Blocks(1, 16, "Red");
		let L14Red50 = new Blocks(2, 16, "Red");
		let L14Blue40 = new Blocks(3, 16, "Red");
		let L14Block49 = new Blocks(7, 16, "Block");
		let L14Purple25 = new Blocks(14, 16, "Purple");
		let L14Purple26 = new Blocks(15, 16, "Purple");
		let L14Red51 = new Blocks(25, 16, "Red");
		let L14Block50 = new Blocks(26, 16, "Block");
		let L14Block51 = new Blocks(7, 17, "Block");
		let L14Purple27 = new Blocks(14, 17, "Purple");
		let L14Purple28 = new Blocks(15, 17, "Purple");
		let L14Red52 = new Blocks(19, 17, "Red");
		let L14Blue41 = new Blocks(22, 17, "Blue");
		let L14Block52 = new Blocks(26, 17, "Block");
		let L14Block53 = new Blocks(7, 18, "Block");
		let L14Lava1 = new Blocks(8, 18, "Lava");
		let L14Lava2 = new Blocks(9, 18, "Lava");
		let L14Lava3 = new Blocks(10, 18, "Lava");
		let L14Lava4 = new Blocks(11, 18, "Lava");
		let L14Lava5 = new Blocks(12, 18, "Lava");
		let L14Lava6 = new Blocks(13, 18, "Lava");
		let L14Purple29 = new Blocks(14, 18, "Purple");
		let L14Purple30 = new Blocks(15, 18, "Purple");
		let L14Block54 = new Blocks(26, 18, "Block");
		let L14Block55 = new Blocks(0, 19, "Block");
		let L14Block56 = new Blocks(1, 19, "Block");
		let L14Block57 = new Blocks(2, 19, "Block");
		let L14Block58 = new Blocks(3, 19, "Block");
		let L14Block59 = new Blocks(4, 19, "Block");
		let L14Block60 = new Blocks(5, 19, "Block");
		let L14Block61 = new Blocks(6, 19, "Block");
		let L14Block62 = new Blocks(7, 19, "Block");
		let L14Block63 = new Blocks(8, 19, "Block");
		let L14Block64 = new Blocks(9, 19, "Block");
		let L14Block65 = new Blocks(10, 19, "Block");
		let L14Block66 = new Blocks(11, 19, "Block");
		let L14Block67 = new Blocks(12, 19, "Block");
		let L14Block68 = new Blocks(13, 19, "Block");
		let L14Block69 = new Blocks(14, 19, "Block");
		let L14Block70 = new Blocks(15, 19, "Block");
		let L14Purple31 = new Blocks(16, 19, "Purple");
		let L14Purple32 = new Blocks(17, 19, "Purple");
		let L14Purple33 = new Blocks(18, 19, "Purple");
		let L14Purple34 = new Blocks(19, 19, "Purple");
		let L14Purple35 = new Blocks(20, 19, "Purple");
		let L14Purple36 = new Blocks(21, 19, "Purple");
		let L14Purple37 = new Blocks(22, 19, "Purple");
		let L14Purple38 = new Blocks(23, 19, "Purple");
		let L14Purple39 = new Blocks(24, 19, "Purple");
		let L14Purple40 = new Blocks(25, 19, "Purple");
		let L14Block71 = new Blocks(26, 19, "Block");
		let L14Block72 = new Blocks(27, 19, "Block");
		let L14Block73 = new Blocks(28, 19, "Block");
		let L14Block74 = new Blocks(29, 19, "Block");
		let L14Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L14Blue1,
			L14Red1,
			L14Red2,
			L14Blue2,
			L14Block1,
			L14Blue3,
			L14Red3,
			L14Red4,
			L14Red5,
			L14Block2,
			L14Red6,
			L14Red7,
			L14Blue4,
			L14Block3,
			L14Red8,
			L14Block4,
			L14Blue5,
			L14Block5,
			L14Red9,
			L14Red10,
			L14Blue6,
			L14Block6,
			L14Blue7,
			L14Blue8,
			L14Block7,
			L14Blue9,
			L14Block8,
			L14Red11,
			L14Red12,
			L14Red13,
			L14Red14,
			L14Red15,
			L14Red16,
			L14Block9,
			L14Block10,
			L14Block11,
			L14Block12,
			L14Red17,
			L14Red18,
			L14Red19,
			L14Blue10,
			L14Block13,
			L14Purple1,
			L14Purple2,
			L14Block14,
			L14Blue11,
			L14Block15,
			L14Blue12,
			L14Block16,
			L14Purple3,
			L14Purple4,
			L14Block17,
			L14Red20,
			L14Red21,
			L14Block18,
			L14Blue13,
			L14Block19,
			L14Blue14,
			L14Blue15,
			L14Blue16,
			L14Blue17,
			L14Blue18,
			L14Blue19,
			L14Purple5,
			L14Purple6,
			L14Block20,
			L14Blue20,
			L14Block21,
			L14Blue21,
			L14Red22,
			L14Red23,
			L14Red24,
			L14Block22,
			L14Purple7,
			L14Purple8,
			L14Block23,
			L14Red25,
			L14Block24,
			L14Blue22,
			L14Block25,
			L14Purple9,
			L14Purple10,
			L14Block26,
			L14Blue23,
			L14Red26,
			L14Block27,
			L14Blue24,
			L14Block28,
			L14Red27,
			L14Red28,
			L14Red29,
			L14Red30,
			L14Red31,
			L14Red32,
			L14Purple11,
			L14Purple12,
			L14Block29,
			L14Blue25,
			L14Block30,
			L14Red33,
			L14Red34,
			L14Red35,
			L14Blue26,
			L14Block31,
			L14Purple13,
			L14Purple14,
			L14Block32,
			L14Red36,
			L14Block33,
			L14Blue27,
			L14Block34,
			L14Purple15,
			L14Purple16,
			L14Block35,
			L14Red37,
			L14Block36,
			L14Blue28,
			L14Block37,
			L14Blue29,
			L14Blue30,
			L14Blue31,
			L14Blue32,
			L14Blue33,
			L14Blue34,
			L14Purple17,
			L14Purple18,
			L14Block38,
			L14Block39,
			L14Blue35,
			L14Red38,
			L14Red39,
			L14Red40,
			L14Block40,
			L14Purple19,
			L14Purple20,
			L14Block41,
			L14Blue36,
			L14Red41,
			L14Block42,
			L14Blue37,
			L14Block43,
			L14Purple21,
			L14Purple22,
			L14Block44,
			L14Blue38,
			L14Block45,
			L14Blue39,
			L14Block46,
			L14Red42,
			L14Red43,
			L14Red44,
			L14Red45,
			L14Red46,
			L14Red47,
			L14Purple23,
			L14Purple24,
			L14Block47,
			L14Block48,
			L14Red48,
			L14Red49,
			L14Red50,
			L14Blue40,
			L14Block49,
			L14Purple25,
			L14Purple26,
			L14Red51,
			L14Block50,
			L14Block51,
			L14Purple27,
			L14Purple28,
			L14Red52,
			L14Blue41,
			L14Block52,
			L14Block53,
			L14Lava1,
			L14Lava2,
			L14Lava3,
			L14Lava4,
			L14Lava5,
			L14Lava6,
			L14Purple29,
			L14Purple30,
			L14Block54,
			L14Block55,
			L14Block56,
			L14Block57,
			L14Block58,
			L14Block59,
			L14Block60,
			L14Block61,
			L14Block62,
			L14Block63,
			L14Block64,
			L14Block65,
			L14Block66,
			L14Block67,
			L14Block68,
			L14Block69,
			L14Block70,
			L14Purple31,
			L14Purple32,
			L14Purple33,
			L14Purple34,
			L14Purple35,
			L14Purple36,
			L14Purple37,
			L14Purple38,
			L14Purple39,
			L14Purple40,
			L14Block71,
			L14Block72,
			L14Block73,
			L14Block74,
			L14Flag
		]);
		let L15Block1 = new Blocks(3, 0, "Block");
		let L15Portal1 = new Blocks(4, 0, "Portal", "", "Portal", 1, 19);
		let L15Block2 = new Blocks(5, 0, "Block");
		let L15Block3 = new Blocks(6, 0, "Block");
		let L15Block4 = new Blocks(7, 0, "Block");
		let L15Block5 = new Blocks(8, 0, "Block");
		let L15Block6 = new Blocks(9, 0, "Block");
		let L15Block7 = new Blocks(10, 0, "Block");
		let L15Block8 = new Blocks(11, 0, "Block");
		let L15Block9 = new Blocks(12, 0, "Block");
		let L15Block10 = new Blocks(13, 0, "Block");
		let L15Block11 = new Blocks(14, 0, "Block");
		let L15Block12 = new Blocks(15, 0, "Block");
		let L15Block13 = new Blocks(16, 0, "Block");
		let L15Block14 = new Blocks(17, 0, "Block");
		let L15Block15 = new Blocks(18, 0, "Block");
		let L15Block16 = new Blocks(19, 0, "Block");
		let L15Block17 = new Blocks(20, 0, "Block");
		let L15Block18 = new Blocks(21, 0, "Block");
		let L15Block19 = new Blocks(22, 0, "Block");
		let L15Block20 = new Blocks(23, 0, "Block");
		let L15Block21 = new Blocks(24, 0, "Block");
		let L15Block22 = new Blocks(25, 0, "Block");
		let L15Block23 = new Blocks(26, 0, "Block");
		let L15Block24 = new Blocks(3, 1, "Block");
		let L15Red1 = new Blocks(5, 1, "Red");
		let L15Blue9 = new Blocks(15, 1, "Blue");
		let L15Blue10 = new Blocks(16, 1, "Blue");
		let L15Blue11 = new Blocks(17, 1, "Blue");
		let L15Blue12 = new Blocks(18, 1, "Blue");
		let L15Blue13 = new Blocks(19, 1, "Blue");
		let L15Blue14 = new Blocks(20, 1, "Blue");
		let L15Blue15 = new Blocks(21, 1, "Blue");
		let L15Blue16 = new Blocks(22, 1, "Blue");
		let L15Blue17 = new Blocks(23, 1, "Blue");
		let L15Blue18 = new Blocks(24, 1, "Blue");
		let L15Blue19 = new Blocks(25, 1, "Blue");
		let L15Block25 = new Blocks(26, 1, "Block");
		let L15Block26 = new Blocks(3, 2, "Block");
		let L15Blue20 = new Blocks(4, 2, "Blue");
		let L15Block27 = new Blocks(5, 2, "Block");
		let L15Block28 = new Blocks(6, 2, "Block");
		let L15Block29 = new Blocks(7, 2, "Block");
		let L15Block30 = new Blocks(8, 2, "Block");
		let L15Block31 = new Blocks(9, 2, "Block");
		let L15Block32 = new Blocks(10, 2, "Block");
		let L15Block33 = new Blocks(11, 2, "Block");
		let L15Block34 = new Blocks(12, 2, "Block");
		let L15Block35 = new Blocks(13, 2, "Block");
		let L15Block36 = new Blocks(14, 2, "Block");
		let L15Block37 = new Blocks(15, 2, "Block");
		let L15Block38 = new Blocks(16, 2, "Block");
		let L15Block39 = new Blocks(17, 2, "Block");
		let L15Block40 = new Blocks(18, 2, "Block");
		let L15Block41 = new Blocks(19, 2, "Block");
		let L15Block42 = new Blocks(20, 2, "Block");
		let L15Block43 = new Blocks(21, 2, "Block");
		let L15Block44 = new Blocks(22, 2, "Block");
		let L15Block45 = new Blocks(23, 2, "Block");
		let L15Block46 = new Blocks(24, 2, "Block");
		let L15Block47 = new Blocks(26, 2, "Block");
		let L15Block48 = new Blocks(3, 3, "Block");
		let L15Block49 = new Blocks(5, 3, "Block");
		let L15Blue22 = new Blocks(6, 3, "Blue");
		let L15Blue23 = new Blocks(7, 3, "Blue");
		let L15Blue24 = new Blocks(8, 3, "Blue");
		let L15Blue25 = new Blocks(9, 3, "Blue");
		let L15Blue26 = new Blocks(10, 3, "Blue");
		let L15Blue27 = new Blocks(11, 3, "Blue");
		let L15Red3 = new Blocks(13, 3, "Red");
		let L15Red4 = new Blocks(14, 3, "Red");
		let L15Red5 = new Blocks(15, 3, "Red");
		let L15Red6 = new Blocks(16, 3, "Red");
		let L15Red7 = new Blocks(17, 3, "Red");
		let L15Red8 = new Blocks(18, 3, "Red");
		let L15Red9 = new Blocks(19, 3, "Red");
		let L15Red10 = new Blocks(20, 3, "Red");
		let L15Red11 = new Blocks(21, 3, "Red");
		let L15Red12 = new Blocks(22, 3, "Red");
		let L15Red13 = new Blocks(23, 3, "Red");
		let L15Red14 = new Blocks(24, 3, "Red");
		let L15Platform1 = new Blocks(25, 3, "Platform");
		let L15Block50 = new Blocks(26, 3, "Block");
		let L15Block51 = new Blocks(3, 4, "Block");
		let L15Block52 = new Blocks(5, 4, "Block");
		let L15Blue28 = new Blocks(6, 4, "Blue");
		let L15Blue29 = new Blocks(7, 4, "Blue");
		let L15Blue30 = new Blocks(8, 4, "Blue");
		let L15Blue31 = new Blocks(9, 4, "Blue");
		let L15Blue32 = new Blocks(10, 4, "Blue");
		let L15Blue33 = new Blocks(11, 4, "Blue");
		let L15Red16 = new Blocks(13, 4, "Red");
		let L15Red17 = new Blocks(14, 4, "Red");
		let L15Red18 = new Blocks(15, 4, "Red");
		let L15Red19 = new Blocks(16, 4, "Red");
		let L15Red20 = new Blocks(17, 4, "Red");
		let L15Red21 = new Blocks(18, 4, "Red");
		let L15Red22 = new Blocks(19, 4, "Red");
		let L15Red23 = new Blocks(20, 4, "Red");
		let L15Red24 = new Blocks(21, 4, "Red");
		let L15Red25 = new Blocks(22, 4, "Red");
		let L15Red26 = new Blocks(23, 4, "Red");
		let L15Red27 = new Blocks(24, 4, "Red");
		let L15Block53 = new Blocks(26, 4, "Block");
		let L15Block54 = new Blocks(3, 5, "Block");
		let L15Block55 = new Blocks(5, 5, "Block");
		let L15Blue34 = new Blocks(6, 5, "Blue");
		let L15Blue35 = new Blocks(7, 5, "Blue");
		let L15Blue36 = new Blocks(8, 5, "Blue");
		let L15Blue37 = new Blocks(9, 5, "Blue");
		let L15Blue38 = new Blocks(10, 5, "Blue");
		let L15Blue39 = new Blocks(11, 5, "Blue");
		let L15Red29 = new Blocks(13, 5, "Red");
		let L15Red30 = new Blocks(14, 5, "Red");
		let L15Red31 = new Blocks(15, 5, "Red");
		let L15Red32 = new Blocks(16, 5, "Red");
		let L15Red33 = new Blocks(17, 5, "Red");
		let L15Red34 = new Blocks(18, 5, "Red");
		let L15Red35 = new Blocks(19, 5, "Red");
		let L15Red36 = new Blocks(20, 5, "Red");
		let L15Red37 = new Blocks(21, 5, "Red");
		let L15Portal2 = new Blocks(25, 5, "Portal", "", "Portal", 6, 13);
		let L15Block56 = new Blocks(26, 5, "Block");
		let L15Block57 = new Blocks(3, 6, "Block");
		let L15Block58 = new Blocks(5, 6, "Block");
		let L15Blue40 = new Blocks(6, 6, "Blue");
		let L15Blue41 = new Blocks(7, 6, "Blue");
		let L15Blue42 = new Blocks(8, 6, "Blue");
		let L15Blue43 = new Blocks(9, 6, "Blue");
		let L15Blue44 = new Blocks(10, 6, "Blue");
		let L15Blue45 = new Blocks(11, 6, "Blue");
		let L15Block59 = new Blocks(12, 6, "Block");
		let L15Blue46 = new Blocks(13, 6, "Blue");
		let L15Blue47 = new Blocks(14, 6, "Blue");
		let L15Blue48 = new Blocks(15, 6, "Blue");
		let L15Blue49 = new Blocks(16, 6, "Blue");
		let L15Blue50 = new Blocks(17, 6, "Blue");
		let L15Blue51 = new Blocks(18, 6, "Blue");
		let L15Blue52 = new Blocks(19, 6, "Blue");
		let L15Blue53 = new Blocks(20, 6, "Blue");
		let L15Blue54 = new Blocks(21, 6, "Blue");
		let L15Blue55 = new Blocks(22, 6, "Blue");
		let L15Blue56 = new Blocks(23, 6, "Blue");
		let L15Blue57 = new Blocks(24, 6, "Blue");
		let L15Blue58 = new Blocks(25, 6, "Blue");
		let L15Block60 = new Blocks(26, 6, "Block");
		let L15Block61 = new Blocks(3, 7, "Block");
		let L15Block62 = new Blocks(5, 7, "Block");
		let L15Blue59 = new Blocks(6, 7, "Blue");
		let L15Blue60 = new Blocks(7, 7, "Blue");
		let L15Blue61 = new Blocks(8, 7, "Blue");
		let L15Blue62 = new Blocks(9, 7, "Blue");
		let L15Blue63 = new Blocks(10, 7, "Blue");
		let L15Blue64 = new Blocks(11, 7, "Blue");
		let L15Block63 = new Blocks(12, 7, "Block");
		let L15Blue65 = new Blocks(13, 7, "Blue");
		let L15Blue66 = new Blocks(14, 7, "Blue");
		let L15Blue67 = new Blocks(15, 7, "Blue");
		let L15Blue68 = new Blocks(16, 7, "Blue");
		let L15Blue69 = new Blocks(17, 7, "Blue");
		let L15Blue70 = new Blocks(18, 7, "Blue");
		let L15Blue71 = new Blocks(19, 7, "Blue");
		let L15Blue72 = new Blocks(20, 7, "Blue");
		let L15Blue73 = new Blocks(21, 7, "Blue");
		let L15Blue74 = new Blocks(22, 7, "Blue");
		let L15Blue75 = new Blocks(23, 7, "Blue");
		let L15Blue76 = new Blocks(24, 7, "Blue");
		let L15Blue77 = new Blocks(25, 7, "Blue");
		let L15Block64 = new Blocks(26, 7, "Block");
		let L15Block65 = new Blocks(3, 8, "Block");
		let L15Block66 = new Blocks(5, 8, "Block");
		let L15Blue78 = new Blocks(6, 8, "Blue");
		let L15Block67 = new Blocks(7, 8, "Block");
		let L15Block68 = new Blocks(8, 8, "Block");
		let L15Block69 = new Blocks(9, 8, "Block");
		let L15Block70 = new Blocks(10, 8, "Block");
		let L15Block71 = new Blocks(11, 8, "Block");
		let L15Block72 = new Blocks(12, 8, "Block");
		let L15Blue79 = new Blocks(13, 8, "Blue");
		let L15Blue80 = new Blocks(14, 8, "Blue");
		let L15Blue81 = new Blocks(15, 8, "Blue");
		let L15Blue82 = new Blocks(16, 8, "Blue");
		let L15Blue83 = new Blocks(17, 8, "Blue");
		let L15Blue84 = new Blocks(18, 8, "Blue");
		let L15Blue85 = new Blocks(19, 8, "Blue");
		let L15Blue86 = new Blocks(20, 8, "Blue");
		let L15Blue87 = new Blocks(21, 8, "Blue");
		let L15Blue88 = new Blocks(22, 8, "Blue");
		let L15Blue89 = new Blocks(23, 8, "Blue");
		let L15Blue90 = new Blocks(24, 8, "Blue");
		let L15Blue91 = new Blocks(25, 8, "Blue");
		let L15Block73 = new Blocks(26, 8, "Block");
		let L15Block74 = new Blocks(3, 9, "Block");
		let L15Block75 = new Blocks(5, 9, "Block");
		let L15Red41 = new Blocks(7, 9, "Red");
		let L15Red42 = new Blocks(8, 9, "Red");
		let L15Red43 = new Blocks(9, 9, "Red");
		let L15Red44 = new Blocks(10, 9, "Red");
		let L15Red45 = new Blocks(11, 9, "Red");
		let L15Blue96 = new Blocks(17, 9, "Blue");
		let L15Blue97 = new Blocks(18, 9, "Blue");
		let L15Blue98 = new Blocks(19, 9, "Blue");
		let L15Blue99 = new Blocks(20, 9, "Blue");
		let L15Blue100 = new Blocks(21, 9, "Blue");
		let L15Blue101 = new Blocks(22, 9, "Blue");
		let L15Blue102 = new Blocks(23, 9, "Blue");
		let L15Blue103 = new Blocks(24, 9, "Blue");
		let L15Blue104 = new Blocks(25, 9, "Blue");
		let L15Block76 = new Blocks(26, 9, "Block");
		let L15Block77 = new Blocks(3, 10, "Block");
		let L15Block78 = new Blocks(5, 10, "Block");
		let L15Block79 = new Blocks(6, 10, "Block");
		let L15SpeedR1 = new Blocks(7, 10, "Speed", "Right");
		let L15SpeedR2 = new Blocks(8, 10, "Speed", "Right");
		let L15SpeedR3 = new Blocks(9, 10, "Speed", "Right");
		let L15SpeedR4 = new Blocks(10, 10, "Speed", "Right");
		let L15SpeedR5 = new Blocks(11, 10, "Speed", "Right");
		let L15Block80 = new Blocks(12, 10, "Block");
		let L15Block81 = new Blocks(13, 10, "Block");
		let L15Block82 = new Blocks(14, 10, "Block");
		let L15Block83 = new Blocks(15, 10, "Block");
		let L15Block84 = new Blocks(16, 10, "Block");
		let L15Block85 = new Blocks(17, 10, "Block");
		let L15Block86 = new Blocks(18, 10, "Block");
		let L15Block87 = new Blocks(19, 10, "Block");
		let L15Block88 = new Blocks(20, 10, "Block");
		let L15Block89 = new Blocks(21, 10, "Block");
		let L15Block90 = new Blocks(22, 10, "Block");
		let L15Block91 = new Blocks(23, 10, "Block");
		let L15Block92 = new Blocks(24, 10, "Block");
		let L15Block93 = new Blocks(25, 10, "Block");
		let L15Block94 = new Blocks(26, 10, "Block");
		let L15Block95 = new Blocks(3, 11, "Block");
		let L15Block96 = new Blocks(5, 11, "Block");
		let L15Blue105 = new Blocks(6, 11, "Blue");
		let L15Red46 = new Blocks(8, 11, "Red");
		let L15Red47 = new Blocks(9, 11, "Red");
		let L15Blue106 = new Blocks(10, 11, "Blue");
		let L15Blue107 = new Blocks(11, 11, "Blue");
		let L15Blue108 = new Blocks(12, 11, "Blue");
		let L15Red48 = new Blocks(14, 11, "Red");
		let L15Red49 = new Blocks(15, 11, "Red");
		let L15Blue109 = new Blocks(16, 11, "Blue");
		let L15Blue110 = new Blocks(17, 11, "Blue");
		let L15Blue111 = new Blocks(18, 11, "Blue");
		let L15Red50 = new Blocks(20, 11, "Red");
		let L15Red51 = new Blocks(21, 11, "Red");
		let L15Blue112 = new Blocks(22, 11, "Blue");
		let L15Blue113 = new Blocks(23, 11, "Blue");
		let L15Blue114 = new Blocks(24, 11, "Blue");
		let L15Block97 = new Blocks(26, 11, "Block");
		let L15Block98 = new Blocks(3, 12, "Block");
		let L15Block99 = new Blocks(5, 12, "Block");
		let L15Blue115 = new Blocks(6, 12, "Blue");
		let L15Red52 = new Blocks(7, 12, "Red");
		let L15Red53 = new Blocks(8, 12, "Red");
		let L15Red54 = new Blocks(9, 12, "Red");
		let L15Blue116 = new Blocks(11, 12, "Blue");
		let L15Blue117 = new Blocks(12, 12, "Blue");
		let L15Red55 = new Blocks(13, 12, "Red");
		let L15Red56 = new Blocks(14, 12, "Red");
		let L15Red57 = new Blocks(15, 12, "Red");
		let L15Blue118 = new Blocks(17, 12, "Blue");
		let L15Blue119 = new Blocks(18, 12, "Blue");
		let L15Red58 = new Blocks(19, 12, "Red");
		let L15Red59 = new Blocks(20, 12, "Red");
		let L15Red60 = new Blocks(21, 12, "Red");
		let L15Blue120 = new Blocks(23, 12, "Blue");
		let L15Blue121 = new Blocks(24, 12, "Blue");
		let L15Block100 = new Blocks(26, 12, "Block");
		let L15Block101 = new Blocks(3, 13, "Block");
		let L15Block102 = new Blocks(5, 13, "Block");
		let L15Portal3 = new Blocks(6, 13, "Portal", "", "Portal", 25, 5);
		let L15Blue122 = new Blocks(7, 13, "Blue");
		let L15Red61 = new Blocks(8, 13, "Red");
		let L15Red62 = new Blocks(9, 13, "Red");
		let L15Blue123 = new Blocks(10, 13, "Blue");
		let L15Blue124 = new Blocks(11, 13, "Blue");
		let L15Blue125 = new Blocks(12, 13, "Blue");
		let L15Red63 = new Blocks(13, 13, "Red");
		let L15Red64 = new Blocks(14, 13, "Red");
		let L15Red65 = new Blocks(15, 13, "Red");
		let L15Blue126 = new Blocks(16, 13, "Blue");
		let L15Blue127 = new Blocks(17, 13, "Blue");
		let L15Blue128 = new Blocks(18, 13, "Blue");
		let L15Red66 = new Blocks(19, 13, "Red");
		let L15Red67 = new Blocks(20, 13, "Red");
		let L15Red68 = new Blocks(21, 13, "Red");
		let L15Blue129 = new Blocks(22, 13, "Blue");
		let L15Blue130 = new Blocks(23, 13, "Blue");
		let L15Blue131 = new Blocks(24, 13, "Blue");
		let L15Block103 = new Blocks(26, 13, "Block");
		let L15Block104 = new Blocks(3, 14, "Block");
		let L15Block105 = new Blocks(5, 14, "Block");
		let L15Blue132 = new Blocks(7, 14, "Blue");
		let L15Red69 = new Blocks(8, 14, "Red");
		let L15Red70 = new Blocks(9, 14, "Red");
		let L15Blue133 = new Blocks(10, 14, "Blue");
		let L15Blue134 = new Blocks(11, 14, "Blue");
		let L15Blue135 = new Blocks(12, 14, "Blue");
		let L15Red71 = new Blocks(13, 14, "Red");
		let L15Red72 = new Blocks(14, 14, "Red");
		let L15Red73 = new Blocks(15, 14, "Red");
		let L15Blue136 = new Blocks(16, 14, "Blue");
		let L15Blue137 = new Blocks(17, 14, "Blue");
		let L15Blue138 = new Blocks(18, 14, "Blue");
		let L15Red74 = new Blocks(19, 14, "Red");
		let L15Red75 = new Blocks(20, 14, "Red");
		let L15Red76 = new Blocks(21, 14, "Red");
		let L15Blue139 = new Blocks(22, 14, "Blue");
		let L15Blue140 = new Blocks(23, 14, "Blue");
		let L15Blue141 = new Blocks(24, 14, "Blue");
		let L15LockedPortal1 = new Blocks(
			25,
			14,
			"LockedPortal",
			"",
			"LockedPortal",
			6,
			16
		);
		let L15Block106 = new Blocks(26, 14, "Block");
		let L15Block107 = new Blocks(3, 15, "Block");
		let L15Block108 = new Blocks(5, 15, "Block");
		let L15Block109 = new Blocks(6, 15, "Block");
		let L15Block110 = new Blocks(7, 15, "Block");
		let L15Block111 = new Blocks(8, 15, "Block");
		let L15Block112 = new Blocks(9, 15, "Block");
		let L15Block113 = new Blocks(10, 15, "Block");
		let L15Block114 = new Blocks(11, 15, "Block");
		let L15Block115 = new Blocks(12, 15, "Block");
		let L15Block116 = new Blocks(13, 15, "Block");
		let L15Block117 = new Blocks(14, 15, "Block");
		let L15Block118 = new Blocks(15, 15, "Block");
		let L15Block119 = new Blocks(16, 15, "Block");
		let L15Block120 = new Blocks(17, 15, "Block");
		let L15Block121 = new Blocks(18, 15, "Block");
		let L15Block122 = new Blocks(19, 15, "Block");
		let L15Block123 = new Blocks(20, 15, "Block");
		let L15Block124 = new Blocks(21, 15, "Block");
		let L15Block125 = new Blocks(22, 15, "Block");
		let L15Block126 = new Blocks(23, 15, "Block");
		let L15Block127 = new Blocks(24, 15, "Block");
		let L15Block128 = new Blocks(25, 15, "Block");
		let L15Block129 = new Blocks(26, 15, "Block");
		let L15Block130 = new Blocks(3, 16, "Block");
		let L15Block131 = new Blocks(5, 16, "Block");
		let L15LockedPortal2 = new Blocks(
			6,
			16,
			"LockedPortal",
			"",
			"LockedPortal",
			25,
			14
		);
		let L15Blue142 = new Blocks(7, 16, "Blue");
		let L15Blue143 = new Blocks(8, 16, "Blue");
		let L15Blue144 = new Blocks(9, 16, "Blue");
		let L15Blue145 = new Blocks(10, 16, "Blue");
		let L15Blue146 = new Blocks(11, 16, "Blue");
		let L15Blue147 = new Blocks(15, 16, "Blue");
		let L15Blue148 = new Blocks(16, 16, "Blue");
		let L15Blue149 = new Blocks(17, 16, "Blue");
		let L15Blue150 = new Blocks(18, 16, "Blue");
		let L15Blue151 = new Blocks(19, 16, "Blue");
		let L15Blue152 = new Blocks(20, 16, "Blue");
		let L15Blue153 = new Blocks(21, 16, "Blue");
		let L15Blue154 = new Blocks(22, 16, "Blue");
		let L15Blue155 = new Blocks(23, 16, "Blue");
		let L15Blue156 = new Blocks(24, 16, "Blue");
		let L15Block132 = new Blocks(26, 16, "Block");
		let L15Portal4 = new Blocks(1, 17, "Portal", "", "Portal", 28, 19);
		let L15Block133 = new Blocks(3, 17, "Block");
		let L15Block134 = new Blocks(5, 17, "Block");
		let L15Block135 = new Blocks(6, 17, "Block");
		let L15SpeedR6 = new Blocks(7, 17, "Speed", "Right");
		let L15SpeedR7 = new Blocks(8, 17, "Speed", "Right");
		let L15SpeedR8 = new Blocks(9, 17, "Speed", "Right");
		let L15SpeedR9 = new Blocks(10, 17, "Speed", "Right");
		let L15SpeedR10 = new Blocks(11, 17, "Speed", "Right");
		let L15Block136 = new Blocks(12, 17, "Block");
		let L15Block137 = new Blocks(13, 17, "Block");
		let L15Platform2 = new Blocks(14, 17, "Platform");
		let L15Block138 = new Blocks(15, 17, "Block");
		let L15Block139 = new Blocks(16, 17, "Block");
		let L15Block140 = new Blocks(17, 17, "Block");
		let L15Block141 = new Blocks(18, 17, "Block");
		let L15Block142 = new Blocks(19, 17, "Block");
		let L15Block143 = new Blocks(20, 17, "Block");
		let L15Block144 = new Blocks(21, 17, "Block");
		let L15Block145 = new Blocks(22, 17, "Block");
		let L15Block146 = new Blocks(23, 17, "Block");
		let L15Block147 = new Blocks(24, 17, "Block");
		let L15Block148 = new Blocks(26, 17, "Block");
		let L15Block149 = new Blocks(3, 18, "Block");
		let L15Red77 = new Blocks(5, 18, "Red");
		let L15Red78 = new Blocks(6, 18, "Red");
		let L15Red79 = new Blocks(7, 18, "Red");
		let L15Red80 = new Blocks(8, 18, "Red");
		let L15Red81 = new Blocks(9, 18, "Red");
		let L15Red82 = new Blocks(10, 18, "Red");
		let L15Red83 = new Blocks(11, 18, "Red");
		let L15Red84 = new Blocks(12, 18, "Red");
		let L15Red85 = new Blocks(13, 18, "Red");
		let L15Red86 = new Blocks(14, 18, "Red");
		let L15Block150 = new Blocks(15, 18, "Block");
		let L15Key1 = new Blocks(16, 18, "Key", "", "Key");
		let L15Blue157 = new Blocks(17, 18, "Blue");
		let L15Blue158 = new Blocks(18, 18, "Blue");
		let L15Blue159 = new Blocks(19, 18, "Blue");
		let L15Blue160 = new Blocks(20, 18, "Blue");
		let L15Block151 = new Blocks(26, 18, "Block");
		let L15Portal5 = new Blocks(1, 19, "Portal", "", "Portal", 4, 0);
		let L15Block152 = new Blocks(3, 19, "Block");
		let L15Block153 = new Blocks(4, 19, "Block");
		let L15Block154 = new Blocks(5, 19, "Block");
		let L15Block155 = new Blocks(6, 19, "Block");
		let L15Block156 = new Blocks(7, 19, "Block");
		let L15Block157 = new Blocks(8, 19, "Block");
		let L15Block158 = new Blocks(9, 19, "Block");
		let L15Block159 = new Blocks(10, 19, "Block");
		let L15Block160 = new Blocks(11, 19, "Block");
		let L15Block161 = new Blocks(12, 19, "Block");
		let L15Block162 = new Blocks(13, 19, "Block");
		let L15Block163 = new Blocks(14, 19, "Block");
		let L15Block164 = new Blocks(15, 19, "Block");
		let L15Block165 = new Blocks(16, 19, "Block");
		let L15SpeedR11 = new Blocks(17, 19, "Speed", "Right");
		let L15SpeedR12 = new Blocks(18, 19, "Speed", "Right");
		let L15SpeedR13 = new Blocks(19, 19, "Speed", "Right");
		let L15SpeedR14 = new Blocks(20, 19, "Speed", "Right");
		let L15Block166 = new Blocks(21, 19, "Block");
		let L15Block167 = new Blocks(22, 19, "Block");
		let L15Block168 = new Blocks(23, 19, "Block");
		let L15Block169 = new Blocks(24, 19, "Block");
		let L15Block170 = new Blocks(25, 19, "Block");
		let L15Block171 = new Blocks(26, 19, "Block");
		let L15Portal6 = new Blocks(28, 19, "Portal", "", "Portal", 1, 17);
		let L15Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L15Block1,
			L15Portal1,
			L15Block2,
			L15Block3,
			L15Block4,
			L15Block5,
			L15Block6,
			L15Block7,
			L15Block8,
			L15Block9,
			L15Block10,
			L15Block11,
			L15Block12,
			L15Block13,
			L15Block14,
			L15Block15,
			L15Block16,
			L15Block17,
			L15Block18,
			L15Block19,
			L15Block20,
			L15Block21,
			L15Block22,
			L15Block23,
			L15Block24,
			L15Red1,
			L15Blue9,
			L15Blue10,
			L15Blue11,
			L15Blue12,
			L15Blue13,
			L15Blue14,
			L15Blue15,
			L15Blue16,
			L15Blue17,
			L15Blue18,
			L15Blue19,
			L15Block25,
			L15Block26,
			L15Blue20,
			L15Block27,
			L15Block28,
			L15Block29,
			L15Block30,
			L15Block31,
			L15Block32,
			L15Block33,
			L15Block34,
			L15Block35,
			L15Block36,
			L15Block37,
			L15Block38,
			L15Block39,
			L15Block40,
			L15Block41,
			L15Block42,
			L15Block43,
			L15Block44,
			L15Block45,
			L15Block46,
			L15Block47,
			L15Block48,
			L15Block49,
			L15Blue22,
			L15Blue23,
			L15Blue24,
			L15Blue25,
			L15Blue26,
			L15Blue27,
			L15Red3,
			L15Red4,
			L15Red5,
			L15Red6,
			L15Red7,
			L15Red8,
			L15Red9,
			L15Red10,
			L15Red11,
			L15Red12,
			L15Red13,
			L15Red14,
			L15Platform1,
			L15Block50,
			L15Block51,
			L15Block52,
			L15Blue28,
			L15Blue29,
			L15Blue30,
			L15Blue31,
			L15Blue32,
			L15Blue33,
			L15Red16,
			L15Red17,
			L15Red18,
			L15Red19,
			L15Red20,
			L15Red21,
			L15Red22,
			L15Red23,
			L15Red24,
			L15Red25,
			L15Red26,
			L15Red27,
			L15Block53,
			L15Block54,
			L15Block55,
			L15Blue34,
			L15Blue35,
			L15Blue36,
			L15Blue37,
			L15Blue38,
			L15Blue39,
			L15Red29,
			L15Red30,
			L15Red31,
			L15Red32,
			L15Red33,
			L15Red34,
			L15Red35,
			L15Red36,
			L15Red37,
			L15Portal2,
			L15Block56,
			L15Block57,
			L15Block58,
			L15Blue40,
			L15Blue41,
			L15Blue42,
			L15Blue43,
			L15Blue44,
			L15Blue45,
			L15Block59,
			L15Blue46,
			L15Blue47,
			L15Blue48,
			L15Blue49,
			L15Blue50,
			L15Blue51,
			L15Blue52,
			L15Blue53,
			L15Blue54,
			L15Blue55,
			L15Blue56,
			L15Blue57,
			L15Blue58,
			L15Block60,
			L15Block61,
			L15Block62,
			L15Blue59,
			L15Blue60,
			L15Blue61,
			L15Blue62,
			L15Blue63,
			L15Blue64,
			L15Block63,
			L15Blue65,
			L15Blue66,
			L15Blue67,
			L15Blue68,
			L15Blue69,
			L15Blue70,
			L15Blue71,
			L15Blue72,
			L15Blue73,
			L15Blue74,
			L15Blue75,
			L15Blue76,
			L15Blue77,
			L15Block64,
			L15Block65,
			L15Block66,
			L15Blue78,
			L15Block67,
			L15Block68,
			L15Block69,
			L15Block70,
			L15Block71,
			L15Block72,
			L15Blue79,
			L15Blue80,
			L15Blue81,
			L15Blue82,
			L15Blue83,
			L15Blue84,
			L15Blue85,
			L15Blue86,
			L15Blue87,
			L15Blue88,
			L15Blue89,
			L15Blue90,
			L15Blue91,
			L15Block73,
			L15Block74,
			L15Block75,
			L15Red41,
			L15Red42,
			L15Red43,
			L15Red44,
			L15Red45,
			L15Blue96,
			L15Blue97,
			L15Blue98,
			L15Blue99,
			L15Blue100,
			L15Blue101,
			L15Blue102,
			L15Blue103,
			L15Blue104,
			L15Block76,
			L15Block77,
			L15Block78,
			L15Block79,
			L15SpeedR1,
			L15SpeedR2,
			L15SpeedR3,
			L15SpeedR4,
			L15SpeedR5,
			L15Block80,
			L15Block81,
			L15Block82,
			L15Block83,
			L15Block84,
			L15Block85,
			L15Block86,
			L15Block87,
			L15Block88,
			L15Block89,
			L15Block90,
			L15Block91,
			L15Block92,
			L15Block93,
			L15Block94,
			L15Block95,
			L15Block96,
			L15Blue105,
			L15Red46,
			L15Red47,
			L15Blue106,
			L15Blue107,
			L15Blue108,
			L15Red48,
			L15Red49,
			L15Blue109,
			L15Blue110,
			L15Blue111,
			L15Red50,
			L15Red51,
			L15Blue112,
			L15Blue113,
			L15Blue114,
			L15Block97,
			L15Block98,
			L15Block99,
			L15Blue115,
			L15Red52,
			L15Red53,
			L15Red54,
			L15Blue116,
			L15Blue117,
			L15Red55,
			L15Red56,
			L15Red57,
			L15Blue118,
			L15Blue119,
			L15Red58,
			L15Red59,
			L15Red60,
			L15Blue120,
			L15Blue121,
			L15Block100,
			L15Block101,
			L15Block102,
			L15Portal3,
			L15Blue122,
			L15Red61,
			L15Red62,
			L15Blue123,
			L15Blue124,
			L15Blue125,
			L15Red63,
			L15Red64,
			L15Red65,
			L15Blue126,
			L15Blue127,
			L15Blue128,
			L15Red66,
			L15Red67,
			L15Red68,
			L15Blue129,
			L15Blue130,
			L15Blue131,
			L15Block103,
			L15Block104,
			L15Block105,
			L15Blue132,
			L15Red69,
			L15Red70,
			L15Blue133,
			L15Blue134,
			L15Blue135,
			L15Red71,
			L15Red72,
			L15Red73,
			L15Blue136,
			L15Blue137,
			L15Blue138,
			L15Red74,
			L15Red75,
			L15Red76,
			L15Blue139,
			L15Blue140,
			L15Blue141,
			L15LockedPortal1,
			L15Block106,
			L15Block107,
			L15Block108,
			L15Block109,
			L15Block110,
			L15Block111,
			L15Block112,
			L15Block113,
			L15Block114,
			L15Block115,
			L15Block116,
			L15Block117,
			L15Block118,
			L15Block119,
			L15Block120,
			L15Block121,
			L15Block122,
			L15Block123,
			L15Block124,
			L15Block125,
			L15Block126,
			L15Block127,
			L15Block128,
			L15Block129,
			L15Block130,
			L15Block131,
			L15LockedPortal2,
			L15Blue142,
			L15Blue143,
			L15Blue144,
			L15Blue145,
			L15Blue146,
			L15Blue147,
			L15Blue148,
			L15Blue149,
			L15Blue150,
			L15Blue151,
			L15Blue152,
			L15Blue153,
			L15Blue154,
			L15Blue155,
			L15Blue156,
			L15Block132,
			L15Portal4,
			L15Block133,
			L15Block134,
			L15Block135,
			L15SpeedR6,
			L15SpeedR7,
			L15SpeedR8,
			L15SpeedR9,
			L15SpeedR10,
			L15Block136,
			L15Block137,
			L15Platform2,
			L15Block138,
			L15Block139,
			L15Block140,
			L15Block141,
			L15Block142,
			L15Block143,
			L15Block144,
			L15Block145,
			L15Block146,
			L15Block147,
			L15Block148,
			L15Block149,
			L15Red77,
			L15Red78,
			L15Red79,
			L15Red80,
			L15Red81,
			L15Red82,
			L15Red83,
			L15Red84,
			L15Red85,
			L15Red86,
			L15Block150,
			L15Key1,
			L15Blue157,
			L15Blue158,
			L15Blue159,
			L15Blue160,
			L15Block151,
			L15Portal5,
			L15Block152,
			L15Block153,
			L15Block154,
			L15Block155,
			L15Block156,
			L15Block157,
			L15Block158,
			L15Block159,
			L15Block160,
			L15Block161,
			L15Block162,
			L15Block163,
			L15Block164,
			L15Block165,
			L15SpeedR11,
			L15SpeedR12,
			L15SpeedR13,
			L15SpeedR14,
			L15Block166,
			L15Block167,
			L15Block168,
			L15Block169,
			L15Block170,
			L15Block171,
			L15Portal6,
			L15Flag
		]);
		let L16Lava1 = new Blocks(4, 0, "Lava");
		let L16Lava2 = new Blocks(7, 0, "Lava");
		let L16Lava3 = new Blocks(10, 0, "Lava");
		let L16Lava4 = new Blocks(13, 0, "Lava");
		let L16Lava5 = new Blocks(19, 0, "Lava");
		let L16Block1 = new Blocks(26, 0, "Block");
		let L16Lava6 = new Blocks(7, 1, "Lava");
		let L16Lava7 = new Blocks(13, 1, "Lava");
		let L16Lava8 = new Blocks(16, 1, "Lava");
		let L16Lava9 = new Blocks(19, 1, "Lava");
		let L16Lava10 = new Blocks(22, 1, "Lava");
		let L16Block2 = new Blocks(26, 1, "Block");
		let L16Portal1 = new Blocks(28, 1, "Portal", "", "Portal", 1, 3);
		let L16Lava11 = new Blocks(4, 2, "Lava");
		let L16Lava12 = new Blocks(7, 2, "Lava");
		let L16Lava13 = new Blocks(10, 2, "Lava");
		let L16Lava14 = new Blocks(13, 2, "Lava");
		let L16Lava15 = new Blocks(16, 2, "Lava");
		let L16Lava16 = new Blocks(19, 2, "Lava");
		let L16Lava17 = new Blocks(22, 2, "Lava");
		let L16Block3 = new Blocks(26, 2, "Block");
		let L16Portal2 = new Blocks(1, 3, "Portal", "", "Portal", 28, 1);
		let L16Lava18 = new Blocks(4, 3, "Lava");
		let L16Lava19 = new Blocks(10, 3, "Lava");
		let L16Lava20 = new Blocks(16, 3, "Lava");
		let L16Lava21 = new Blocks(22, 3, "Lava");
		let L16Block4 = new Blocks(26, 3, "Block");
		let L16Block5 = new Blocks(0, 4, "Block");
		let L16Block6 = new Blocks(1, 4, "Block");
		let L16Block7 = new Blocks(2, 4, "Block");
		let L16SpeedR1 = new Blocks(3, 4, "Speed", "Right");
		let L16SpeedR2 = new Blocks(4, 4, "Speed", "Right");
		let L16SpeedR3 = new Blocks(5, 4, "Speed", "Right");
		let L16SpeedR4 = new Blocks(6, 4, "Speed", "Right");
		let L16SpeedR5 = new Blocks(7, 4, "Speed", "Right");
		let L16SpeedR6 = new Blocks(8, 4, "Speed", "Right");
		let L16SpeedR7 = new Blocks(9, 4, "Speed", "Right");
		let L16SpeedR8 = new Blocks(10, 4, "Speed", "Right");
		let L16SpeedR9 = new Blocks(11, 4, "Speed", "Right");
		let L16SpeedR10 = new Blocks(12, 4, "Speed", "Right");
		let L16SpeedR11 = new Blocks(13, 4, "Speed", "Right");
		let L16SpeedR12 = new Blocks(14, 4, "Speed", "Right");
		let L16SpeedR13 = new Blocks(15, 4, "Speed", "Right");
		let L16SpeedR14 = new Blocks(16, 4, "Speed", "Right");
		let L16SpeedR15 = new Blocks(17, 4, "Speed", "Right");
		let L16SpeedR16 = new Blocks(18, 4, "Speed", "Right");
		let L16SpeedR17 = new Blocks(19, 4, "Speed", "Right");
		let L16SpeedR18 = new Blocks(20, 4, "Speed", "Right");
		let L16SpeedR19 = new Blocks(21, 4, "Speed", "Right");
		let L16SpeedR20 = new Blocks(22, 4, "Speed", "Right");
		let L16Platform1 = new Blocks(23, 4, "Platform");
		let L16Platform2 = new Blocks(24, 4, "Platform");
		let L16Platform3 = new Blocks(25, 4, "Platform");
		let L16Block8 = new Blocks(26, 4, "Block");
		let L16Lava22 = new Blocks(0, 5, "Lava");
		let L16Lava23 = new Blocks(1, 5, "Lava");
		let L16Lava24 = new Blocks(2, 5, "Lava");
		let L16Lava25 = new Blocks(3, 5, "Lava");
		let L16Lava26 = new Blocks(4, 5, "Lava");
		let L16Lava27 = new Blocks(5, 5, "Lava");
		let L16Lava28 = new Blocks(6, 5, "Lava");
		let L16Lava29 = new Blocks(7, 5, "Lava");
		let L16Lava30 = new Blocks(8, 5, "Lava");
		let L16Lava31 = new Blocks(9, 5, "Lava");
		let L16Lava32 = new Blocks(10, 5, "Lava");
		let L16Lava33 = new Blocks(11, 5, "Lava");
		let L16Lava34 = new Blocks(12, 5, "Lava");
		let L16Lava35 = new Blocks(13, 5, "Lava");
		let L16Lava36 = new Blocks(14, 5, "Lava");
		let L16Lava37 = new Blocks(15, 5, "Lava");
		let L16Lava38 = new Blocks(16, 5, "Lava");
		let L16Lava39 = new Blocks(17, 5, "Lava");
		let L16Lava40 = new Blocks(18, 5, "Lava");
		let L16Lava41 = new Blocks(19, 5, "Lava");
		let L16Lava42 = new Blocks(20, 5, "Lava");
		let L16Lava43 = new Blocks(21, 5, "Lava");
		let L16Lava44 = new Blocks(22, 5, "Lava");
		let L16Block9 = new Blocks(26, 5, "Block");
		let L16Block10 = new Blocks(26, 6, "Block");
		let L16Block11 = new Blocks(26, 7, "Block");
		let L16Block12 = new Blocks(26, 8, "Block");
		let L16Platform4 = new Blocks(0, 9, "Platform");
		let L16Platform5 = new Blocks(1, 9, "Platform");
		let L16Platform6 = new Blocks(2, 9, "Platform");
		let L16SpeedU1 = new Blocks(3, 9, "Speed", "Up");
		let L16Block13 = new Blocks(4, 9, "Block");
		let L16SpeedU2 = new Blocks(5, 9, "Speed", "Up");
		let L16Block14 = new Blocks(6, 9, "Block");
		let L16SpeedU3 = new Blocks(7, 9, "Speed", "Up");
		let L16Block15 = new Blocks(8, 9, "Block");
		let L16SpeedU4 = new Blocks(9, 9, "Speed", "Up");
		let L16Block16 = new Blocks(10, 9, "Block");
		let L16SpeedU5 = new Blocks(11, 9, "Speed", "Up");
		let L16Block17 = new Blocks(12, 9, "Block");
		let L16SpeedU6 = new Blocks(13, 9, "Speed", "Up");
		let L16Block18 = new Blocks(14, 9, "Block");
		let L16SpeedU7 = new Blocks(15, 9, "Speed", "Up");
		let L16Block19 = new Blocks(16, 9, "Block");
		let L16SpeedU8 = new Blocks(17, 9, "Speed", "Up");
		let L16Block20 = new Blocks(18, 9, "Block");
		let L16SpeedU9 = new Blocks(19, 9, "Speed", "Up");
		let L16Block21 = new Blocks(20, 9, "Block");
		let L16SpeedU10 = new Blocks(21, 9, "Speed", "Up");
		let L16Block22 = new Blocks(22, 9, "Block");
		let L16Block23 = new Blocks(23, 9, "Block");
		let L16SpeedU11 = new Blocks(24, 9, "Speed", "Up");
		let L16Block24 = new Blocks(25, 9, "Block");
		let L16Block25 = new Blocks(26, 9, "Block");
		let L16Lava45 = new Blocks(3, 10, "Lava");
		let L16Lava46 = new Blocks(4, 10, "Lava");
		let L16Lava47 = new Blocks(5, 10, "Lava");
		let L16Lava48 = new Blocks(6, 10, "Lava");
		let L16Lava49 = new Blocks(7, 10, "Lava");
		let L16Lava50 = new Blocks(8, 10, "Lava");
		let L16Lava51 = new Blocks(9, 10, "Lava");
		let L16Lava52 = new Blocks(10, 10, "Lava");
		let L16Lava53 = new Blocks(11, 10, "Lava");
		let L16Lava54 = new Blocks(12, 10, "Lava");
		let L16Lava55 = new Blocks(13, 10, "Lava");
		let L16Lava56 = new Blocks(14, 10, "Lava");
		let L16Lava57 = new Blocks(15, 10, "Lava");
		let L16Lava58 = new Blocks(16, 10, "Lava");
		let L16Lava59 = new Blocks(17, 10, "Lava");
		let L16Lava60 = new Blocks(18, 10, "Lava");
		let L16Lava61 = new Blocks(19, 10, "Lava");
		let L16Lava62 = new Blocks(20, 10, "Lava");
		let L16Lava63 = new Blocks(21, 10, "Lava");
		let L16Lava64 = new Blocks(22, 10, "Lava");
		let L16Lava65 = new Blocks(23, 10, "Lava");
		let L16Lava66 = new Blocks(24, 10, "Lava");
		let L16Lava67 = new Blocks(25, 10, "Lava");
		let L16Block26 = new Blocks(26, 10, "Block");
		let L16Block27 = new Blocks(26, 11, "Block");
		let L16Block28 = new Blocks(26, 12, "Block");
		let L16Block29 = new Blocks(26, 13, "Block");
		let L16Block30 = new Blocks(0, 14, "Block");
		let L16SpeedU12 = new Blocks(1, 14, "Speed", "Up");
		let L16Block31 = new Blocks(2, 14, "Block");
		let L16Block32 = new Blocks(3, 14, "Block");
		let L16SpeedU13 = new Blocks(4, 14, "Speed", "Up");
		let L16Block33 = new Blocks(5, 14, "Block");
		let L16Block34 = new Blocks(6, 14, "Block");
		let L16SpeedU14 = new Blocks(7, 14, "Speed", "Up");
		let L16Block35 = new Blocks(8, 14, "Block");
		let L16Block36 = new Blocks(9, 14, "Block");
		let L16SpeedU15 = new Blocks(10, 14, "Speed", "Up");
		let L16Block37 = new Blocks(11, 14, "Block");
		let L16Block38 = new Blocks(12, 14, "Block");
		let L16SpeedU16 = new Blocks(13, 14, "Speed", "Up");
		let L16Block39 = new Blocks(14, 14, "Block");
		let L16Block40 = new Blocks(15, 14, "Block");
		let L16SpeedU17 = new Blocks(16, 14, "Speed", "Up");
		let L16Block41 = new Blocks(17, 14, "Block");
		let L16Block42 = new Blocks(18, 14, "Block");
		let L16SpeedU18 = new Blocks(19, 14, "Speed", "Up");
		let L16Block43 = new Blocks(20, 14, "Block");
		let L16Block44 = new Blocks(21, 14, "Block");
		let L16SpeedU19 = new Blocks(22, 14, "Speed", "Up");
		let L16Platform7 = new Blocks(23, 14, "Platform");
		let L16Platform8 = new Blocks(24, 14, "Platform");
		let L16Platform9 = new Blocks(25, 14, "Platform");
		let L16Block45 = new Blocks(26, 14, "Block");
		let L16Lava68 = new Blocks(0, 15, "Lava");
		let L16Lava69 = new Blocks(1, 15, "Lava");
		let L16Lava70 = new Blocks(2, 15, "Lava");
		let L16Lava71 = new Blocks(3, 15, "Lava");
		let L16Lava72 = new Blocks(4, 15, "Lava");
		let L16Lava73 = new Blocks(5, 15, "Lava");
		let L16Lava74 = new Blocks(6, 15, "Lava");
		let L16Lava75 = new Blocks(7, 15, "Lava");
		let L16Lava76 = new Blocks(8, 15, "Lava");
		let L16Lava77 = new Blocks(9, 15, "Lava");
		let L16Lava78 = new Blocks(10, 15, "Lava");
		let L16Lava79 = new Blocks(11, 15, "Lava");
		let L16Lava80 = new Blocks(12, 15, "Lava");
		let L16Lava81 = new Blocks(13, 15, "Lava");
		let L16Lava82 = new Blocks(14, 15, "Lava");
		let L16Lava83 = new Blocks(15, 15, "Lava");
		let L16Lava84 = new Blocks(16, 15, "Lava");
		let L16Lava85 = new Blocks(17, 15, "Lava");
		let L16Lava86 = new Blocks(18, 15, "Lava");
		let L16Lava87 = new Blocks(19, 15, "Lava");
		let L16Lava88 = new Blocks(20, 15, "Lava");
		let L16Lava89 = new Blocks(21, 15, "Lava");
		let L16Lava90 = new Blocks(22, 15, "Lava");
		let L16Block46 = new Blocks(26, 15, "Block");
		let L16Block47 = new Blocks(26, 16, "Block");
		let L16Block48 = new Blocks(26, 17, "Block");
		let L16Block49 = new Blocks(26, 18, "Block");
		let L16Block50 = new Blocks(0, 19, "Block");
		let L16Block51 = new Blocks(1, 19, "Block");
		let L16Block52 = new Blocks(2, 19, "Block");
		let L16SpeedU20 = new Blocks(3, 19, "Speed", "Up");
		let L16Block53 = new Blocks(4, 19, "Block");
		let L16Block54 = new Blocks(5, 19, "Block");
		let L16Block55 = new Blocks(6, 19, "Block");
		let L16SpeedU21 = new Blocks(7, 19, "Speed", "Up");
		let L16Block56 = new Blocks(8, 19, "Block");
		let L16Block57 = new Blocks(9, 19, "Block");
		let L16Block58 = new Blocks(10, 19, "Block");
		let L16SpeedU22 = new Blocks(11, 19, "Speed", "Up");
		let L16Block59 = new Blocks(12, 19, "Block");
		let L16Block60 = new Blocks(13, 19, "Block");
		let L16Block61 = new Blocks(14, 19, "Block");
		let L16SpeedU23 = new Blocks(15, 19, "Speed", "Up");
		let L16Block62 = new Blocks(16, 19, "Block");
		let L16Block63 = new Blocks(17, 19, "Block");
		let L16Block64 = new Blocks(18, 19, "Block");
		let L16SpeedU24 = new Blocks(19, 19, "Speed", "Up");
		let L16Block65 = new Blocks(20, 19, "Block");
		let L16Block66 = new Blocks(21, 19, "Block");
		let L16Block67 = new Blocks(22, 19, "Block");
		let L16Block68 = new Blocks(23, 19, "Block");
		let L16SpeedU25 = new Blocks(24, 19, "Speed", "Up");
		let L16Block69 = new Blocks(25, 19, "Block");
		let L16Block70 = new Blocks(26, 19, "Block");
		let L16Block71 = new Blocks(27, 19, "Block");
		let L16Block72 = new Blocks(28, 19, "Block");
		let L16Block73 = new Blocks(29, 19, "Block");
		let L16Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L16Lava1,
			L16Lava2,
			L16Lava3,
			L16Lava4,
			L16Lava5,
			L16Block1,
			L16Lava6,
			L16Lava7,
			L16Lava8,
			L16Lava9,
			L16Lava10,
			L16Block2,
			L16Portal1,
			L16Lava11,
			L16Lava12,
			L16Lava13,
			L16Lava14,
			L16Lava15,
			L16Lava16,
			L16Lava17,
			L16Block3,
			L16Portal2,
			L16Lava18,
			L16Lava19,
			L16Lava20,
			L16Lava21,
			L16Block4,
			L16Block5,
			L16Block6,
			L16Block7,
			L16SpeedR1,
			L16SpeedR2,
			L16SpeedR3,
			L16SpeedR4,
			L16SpeedR5,
			L16SpeedR6,
			L16SpeedR7,
			L16SpeedR8,
			L16SpeedR9,
			L16SpeedR10,
			L16SpeedR11,
			L16SpeedR12,
			L16SpeedR13,
			L16SpeedR14,
			L16SpeedR15,
			L16SpeedR16,
			L16SpeedR17,
			L16SpeedR18,
			L16SpeedR19,
			L16SpeedR20,
			L16Platform1,
			L16Platform2,
			L16Platform3,
			L16Block8,
			L16Lava22,
			L16Lava23,
			L16Lava24,
			L16Lava25,
			L16Lava26,
			L16Lava27,
			L16Lava28,
			L16Lava29,
			L16Lava30,
			L16Lava31,
			L16Lava32,
			L16Lava33,
			L16Lava34,
			L16Lava35,
			L16Lava36,
			L16Lava37,
			L16Lava38,
			L16Lava39,
			L16Lava40,
			L16Lava41,
			L16Lava42,
			L16Lava43,
			L16Lava44,
			L16Block9,
			L16Block10,
			L16Block11,
			L16Block12,
			L16Platform4,
			L16Platform5,
			L16Platform6,
			L16SpeedU1,
			L16Block13,
			L16SpeedU2,
			L16Block14,
			L16SpeedU3,
			L16Block15,
			L16SpeedU4,
			L16Block16,
			L16SpeedU5,
			L16Block17,
			L16SpeedU6,
			L16Block18,
			L16SpeedU7,
			L16Block19,
			L16SpeedU8,
			L16Block20,
			L16SpeedU9,
			L16Block21,
			L16SpeedU10,
			L16Block22,
			L16Block23,
			L16SpeedU11,
			L16Block24,
			L16Block25,
			L16Lava45,
			L16Lava46,
			L16Lava47,
			L16Lava48,
			L16Lava49,
			L16Lava50,
			L16Lava51,
			L16Lava52,
			L16Lava53,
			L16Lava54,
			L16Lava55,
			L16Lava56,
			L16Lava57,
			L16Lava58,
			L16Lava59,
			L16Lava60,
			L16Lava61,
			L16Lava62,
			L16Lava63,
			L16Lava64,
			L16Lava65,
			L16Lava66,
			L16Lava67,
			L16Block26,
			L16Block27,
			L16Block28,
			L16Block29,
			L16Block30,
			L16SpeedU12,
			L16Block31,
			L16Block32,
			L16SpeedU13,
			L16Block33,
			L16Block34,
			L16SpeedU14,
			L16Block35,
			L16Block36,
			L16SpeedU15,
			L16Block37,
			L16Block38,
			L16SpeedU16,
			L16Block39,
			L16Block40,
			L16SpeedU17,
			L16Block41,
			L16Block42,
			L16SpeedU18,
			L16Block43,
			L16Block44,
			L16SpeedU19,
			L16Platform7,
			L16Platform8,
			L16Platform9,
			L16Block45,
			L16Lava68,
			L16Lava69,
			L16Lava70,
			L16Lava71,
			L16Lava72,
			L16Lava73,
			L16Lava74,
			L16Lava75,
			L16Lava76,
			L16Lava77,
			L16Lava78,
			L16Lava79,
			L16Lava80,
			L16Lava81,
			L16Lava82,
			L16Lava83,
			L16Lava84,
			L16Lava85,
			L16Lava86,
			L16Lava87,
			L16Lava88,
			L16Lava89,
			L16Lava90,
			L16Block46,
			L16Block47,
			L16Block48,
			L16Block49,
			L16Block50,
			L16Block51,
			L16Block52,
			L16SpeedU20,
			L16Block53,
			L16Block54,
			L16Block55,
			L16SpeedU21,
			L16Block56,
			L16Block57,
			L16Block58,
			L16SpeedU22,
			L16Block59,
			L16Block60,
			L16Block61,
			L16SpeedU23,
			L16Block62,
			L16Block63,
			L16Block64,
			L16SpeedU24,
			L16Block65,
			L16Block66,
			L16Block67,
			L16Block68,
			L16SpeedU25,
			L16Block69,
			L16Block70,
			L16Block71,
			L16Block72,
			L16Block73,
			L16Flag
		]);
		let L17Lava1 = new Blocks(0, 0, "Lava");
		let L17Lava2 = new Blocks(1, 0, "Lava");
		let L17Lava3 = new Blocks(2, 0, "Lava");
		let L17Lava4 = new Blocks(3, 0, "Lava");
		let L17Lava5 = new Blocks(4, 0, "Lava");
		let L17Lava6 = new Blocks(5, 0, "Lava");
		let L17Lava7 = new Blocks(6, 0, "Lava");
		let L17Lava8 = new Blocks(7, 0, "Lava");
		let L17Lava9 = new Blocks(8, 0, "Lava");
		let L17Lava10 = new Blocks(9, 0, "Lava");
		let L17Lava11 = new Blocks(10, 0, "Lava");
		let L17Lava12 = new Blocks(11, 0, "Lava");
		let L17Lava13 = new Blocks(12, 0, "Lava");
		let L17Lava14 = new Blocks(13, 0, "Lava");
		let L17Lava15 = new Blocks(14, 0, "Lava");
		let L17Lava16 = new Blocks(15, 0, "Lava");
		let L17Lava17 = new Blocks(16, 0, "Lava");
		let L17Lava18 = new Blocks(17, 0, "Lava");
		let L17Lava19 = new Blocks(18, 0, "Lava");
		let L17Lava20 = new Blocks(19, 0, "Lava");
		let L17Lava21 = new Blocks(20, 0, "Lava");
		let L17Lava22 = new Blocks(21, 0, "Lava");
		let L17Lava23 = new Blocks(22, 0, "Lava");
		let L17Lava24 = new Blocks(23, 0, "Lava");
		let L17Lava25 = new Blocks(24, 0, "Lava");
		let L17Lava26 = new Blocks(25, 0, "Lava");
		let L17Lava27 = new Blocks(26, 0, "Lava");
		let L17Lava28 = new Blocks(27, 0, "Lava");
		let L17Lava29 = new Blocks(28, 0, "Lava");
		let L17Lava30 = new Blocks(29, 0, "Lava");
		let L17Lava31 = new Blocks(0, 1, "Lava");
		let L17Lava32 = new Blocks(4, 1, "Lava");
		let L17Lava33 = new Blocks(8, 1, "Lava");
		let L17Lava34 = new Blocks(12, 1, "Lava");
		let L17Lava35 = new Blocks(16, 1, "Lava");
		let L17Lava36 = new Blocks(20, 1, "Lava");
		let L17Lava37 = new Blocks(24, 1, "Lava");
		let L17Lava38 = new Blocks(29, 1, "Lava");
		let L17Lava39 = new Blocks(0, 2, "Lava");
		let L17Portal1 = new Blocks(2, 2, "Portal", "", "Portal", 6, 17);
		let L17Lava40 = new Blocks(4, 2, "Lava");
		let L17Portal2 = new Blocks(6, 2, "Portal", "", "Portal", 10, 17);
		let L17Lava41 = new Blocks(8, 2, "Lava");
		let L17Portal3 = new Blocks(10, 2, "Portal", "", "Portal", 14, 17);
		let L17Lava42 = new Blocks(12, 2, "Lava");
		let L17Portal4 = new Blocks(14, 2, "Portal", "", "Portal", 18, 17);
		let L17Lava43 = new Blocks(16, 2, "Lava");
		let L17Portal5 = new Blocks(18, 2, "Portal", "", "Portal", 22, 17);
		let L17Lava44 = new Blocks(20, 2, "Lava");
		let L17Portal6 = new Blocks(22, 2, "Portal", "", "Portal", 26, 3);
		let L17Lava45 = new Blocks(24, 2, "Lava");
		let L17Lava46 = new Blocks(29, 2, "Lava");
		let L17Lava47 = new Blocks(0, 3, "Lava");
		let L17Lava48 = new Blocks(4, 3, "Lava");
		let L17Lava49 = new Blocks(8, 3, "Lava");
		let L17Lava50 = new Blocks(12, 3, "Lava");
		let L17Lava51 = new Blocks(16, 3, "Lava");
		let L17Lava52 = new Blocks(20, 3, "Lava");
		let L17Lava53 = new Blocks(24, 3, "Lava");
		let L17Portal7 = new Blocks(26, 3, "Portal", "", "Portal", 22, 2);
		let L17Lava54 = new Blocks(29, 3, "Lava");
		let L17Lava55 = new Blocks(0, 4, "Lava");
		let L17SpeedL1 = new Blocks(3, 4, "Speed", "Left");
		let L17Lava56 = new Blocks(4, 4, "Lava");
		let L17SpeedR1 = new Blocks(5, 4, "Speed", "Right");
		let L17Lava57 = new Blocks(8, 4, "Lava");
		let L17SpeedL2 = new Blocks(11, 4, "Speed", "Left");
		let L17Lava58 = new Blocks(12, 4, "Lava");
		let L17SpeedR2 = new Blocks(13, 4, "Speed", "Right");
		let L17Lava59 = new Blocks(16, 4, "Lava");
		let L17SpeedL3 = new Blocks(19, 4, "Speed", "Left");
		let L17Lava60 = new Blocks(20, 4, "Lava");
		let L17SpeedR3 = new Blocks(21, 4, "Speed", "Right");
		let L17Lava61 = new Blocks(24, 4, "Lava");
		let L17Lava62 = new Blocks(29, 4, "Lava");
		let L17Lava63 = new Blocks(0, 5, "Lava");
		let L17Lava64 = new Blocks(4, 5, "Lava");
		let L17Lava65 = new Blocks(8, 5, "Lava");
		let L17Lava66 = new Blocks(12, 5, "Lava");
		let L17Lava67 = new Blocks(16, 5, "Lava");
		let L17Lava68 = new Blocks(20, 5, "Lava");
		let L17Lava69 = new Blocks(24, 5, "Lava");
		let L17SpeedL4 = new Blocks(26, 5, "Speed", "Left");
		let L17SpeedL5 = new Blocks(27, 5, "Speed", "Left");
		let L17SpeedL6 = new Blocks(28, 5, "Speed", "Left");
		let L17Lava70 = new Blocks(29, 5, "Lava");
		let L17Lava71 = new Blocks(0, 6, "Lava");
		let L17Lava72 = new Blocks(4, 6, "Lava");
		let L17Lava73 = new Blocks(8, 6, "Lava");
		let L17Lava74 = new Blocks(12, 6, "Lava");
		let L17Lava75 = new Blocks(16, 6, "Lava");
		let L17Lava76 = new Blocks(20, 6, "Lava");
		let L17Lava77 = new Blocks(24, 6, "Lava");
		let L17Lava78 = new Blocks(29, 6, "Lava");
		let L17Lava79 = new Blocks(0, 7, "Lava");
		let L17SpeedR4 = new Blocks(1, 7, "Speed", "Right");
		let L17Lava80 = new Blocks(4, 7, "Lava");
		let L17SpeedL7 = new Blocks(7, 7, "Speed", "Left");
		let L17Lava81 = new Blocks(8, 7, "Lava");
		let L17SpeedR5 = new Blocks(9, 7, "Speed", "Right");
		let L17Lava82 = new Blocks(12, 7, "Lava");
		let L17SpeedL8 = new Blocks(15, 7, "Speed", "Left");
		let L17Lava83 = new Blocks(16, 7, "Lava");
		let L17SpeedR6 = new Blocks(17, 7, "Speed", "Right");
		let L17Lava84 = new Blocks(20, 7, "Lava");
		let L17SpeedL9 = new Blocks(23, 7, "Speed", "Left");
		let L17Lava85 = new Blocks(24, 7, "Lava");
		let L17SpeedR7 = new Blocks(25, 7, "Speed", "Right");
		let L17SpeedR8 = new Blocks(26, 7, "Speed", "Right");
		let L17SpeedR9 = new Blocks(27, 7, "Speed", "Right");
		let L17Lava86 = new Blocks(29, 7, "Lava");
		let L17Lava87 = new Blocks(0, 8, "Lava");
		let L17Lava88 = new Blocks(4, 8, "Lava");
		let L17Lava89 = new Blocks(8, 8, "Lava");
		let L17Lava90 = new Blocks(12, 8, "Lava");
		let L17Lava91 = new Blocks(16, 8, "Lava");
		let L17Lava92 = new Blocks(20, 8, "Lava");
		let L17Lava93 = new Blocks(24, 8, "Lava");
		let L17Lava94 = new Blocks(29, 8, "Lava");
		let L17Lava95 = new Blocks(0, 9, "Lava");
		let L17Lava96 = new Blocks(4, 9, "Lava");
		let L17Lava97 = new Blocks(8, 9, "Lava");
		let L17Lava98 = new Blocks(12, 9, "Lava");
		let L17Lava99 = new Blocks(16, 9, "Lava");
		let L17Lava100 = new Blocks(20, 9, "Lava");
		let L17Lava101 = new Blocks(24, 9, "Lava");
		let L17SpeedL10 = new Blocks(26, 9, "Speed", "Left");
		let L17SpeedL11 = new Blocks(27, 9, "Speed", "Left");
		let L17SpeedL12 = new Blocks(28, 9, "Speed", "Left");
		let L17Lava102 = new Blocks(29, 9, "Lava");
		let L17Lava103 = new Blocks(0, 10, "Lava");
		let L17SpeedL13 = new Blocks(3, 10, "Speed", "Left");
		let L17Lava104 = new Blocks(4, 10, "Lava");
		let L17SpeedR10 = new Blocks(5, 10, "Speed", "Right");
		let L17Lava105 = new Blocks(8, 10, "Lava");
		let L17SpeedL14 = new Blocks(11, 10, "Speed", "Left");
		let L17Lava106 = new Blocks(12, 10, "Lava");
		let L17SpeedR11 = new Blocks(13, 10, "Speed", "Right");
		let L17Lava107 = new Blocks(16, 10, "Lava");
		let L17SpeedL15 = new Blocks(19, 10, "Speed", "Left");
		let L17Lava108 = new Blocks(20, 10, "Lava");
		let L17SpeedR12 = new Blocks(21, 10, "Speed", "Right");
		let L17Lava109 = new Blocks(24, 10, "Lava");
		let L17Lava110 = new Blocks(29, 10, "Lava");
		let L17Lava111 = new Blocks(0, 11, "Lava");
		let L17Lava112 = new Blocks(4, 11, "Lava");
		let L17Lava113 = new Blocks(8, 11, "Lava");
		let L17Lava114 = new Blocks(12, 11, "Lava");
		let L17Lava115 = new Blocks(16, 11, "Lava");
		let L17Lava116 = new Blocks(20, 11, "Lava");
		let L17Lava117 = new Blocks(24, 11, "Lava");
		let L17SpeedR13 = new Blocks(25, 11, "Speed", "Right");
		let L17SpeedR14 = new Blocks(26, 11, "Speed", "Right");
		let L17SpeedR15 = new Blocks(27, 11, "Speed", "Right");
		let L17Lava118 = new Blocks(29, 11, "Lava");
		let L17Lava119 = new Blocks(0, 12, "Lava");
		let L17Lava120 = new Blocks(4, 12, "Lava");
		let L17Lava121 = new Blocks(8, 12, "Lava");
		let L17Lava122 = new Blocks(12, 12, "Lava");
		let L17Lava123 = new Blocks(16, 12, "Lava");
		let L17Lava124 = new Blocks(20, 12, "Lava");
		let L17Lava125 = new Blocks(24, 12, "Lava");
		let L17Lava126 = new Blocks(29, 12, "Lava");
		let L17Lava127 = new Blocks(0, 13, "Lava");
		let L17SpeedR16 = new Blocks(1, 13, "Speed", "Right");
		let L17Lava128 = new Blocks(4, 13, "Lava");
		let L17SpeedL16 = new Blocks(7, 13, "Speed", "Left");
		let L17Lava129 = new Blocks(8, 13, "Lava");
		let L17SpeedR17 = new Blocks(9, 13, "Speed", "Right");
		let L17Lava130 = new Blocks(12, 13, "Lava");
		let L17SpeedL17 = new Blocks(15, 13, "Speed", "Left");
		let L17Lava131 = new Blocks(16, 13, "Lava");
		let L17SpeedR18 = new Blocks(17, 13, "Speed", "Right");
		let L17Lava132 = new Blocks(20, 13, "Lava");
		let L17SpeedL18 = new Blocks(23, 13, "Speed", "Left");
		let L17Lava133 = new Blocks(24, 13, "Lava");
		let L17SpeedL19 = new Blocks(26, 13, "Speed", "Left");
		let L17SpeedL20 = new Blocks(27, 13, "Speed", "Left");
		let L17SpeedL21 = new Blocks(28, 13, "Speed", "Left");
		let L17Lava134 = new Blocks(29, 13, "Lava");
		let L17Lava135 = new Blocks(0, 14, "Lava");
		let L17Lava136 = new Blocks(4, 14, "Lava");
		let L17Lava137 = new Blocks(8, 14, "Lava");
		let L17Lava138 = new Blocks(12, 14, "Lava");
		let L17Lava139 = new Blocks(16, 14, "Lava");
		let L17Lava140 = new Blocks(20, 14, "Lava");
		let L17Lava141 = new Blocks(24, 14, "Lava");
		let L17Lava142 = new Blocks(29, 14, "Lava");
		let L17Lava143 = new Blocks(0, 15, "Lava");
		let L17Lava144 = new Blocks(4, 15, "Lava");
		let L17Lava145 = new Blocks(8, 15, "Lava");
		let L17Lava146 = new Blocks(12, 15, "Lava");
		let L17Lava147 = new Blocks(16, 15, "Lava");
		let L17Lava148 = new Blocks(20, 15, "Lava");
		let L17Lava149 = new Blocks(24, 15, "Lava");
		let L17SpeedR19 = new Blocks(25, 15, "Speed", "Right");
		let L17SpeedR20 = new Blocks(26, 15, "Speed", "Right");
		let L17SpeedR21 = new Blocks(27, 15, "Speed", "Right");
		let L17Lava150 = new Blocks(29, 15, "Lava");
		let L17Lava151 = new Blocks(0, 16, "Lava");
		let L17SpeedL22 = new Blocks(3, 16, "Speed", "Left");
		let L17Lava152 = new Blocks(4, 16, "Lava");
		let L17SpeedR22 = new Blocks(5, 16, "Speed", "Right");
		let L17Lava153 = new Blocks(8, 16, "Lava");
		let L17SpeedL23 = new Blocks(11, 16, "Speed", "Left");
		let L17Lava154 = new Blocks(12, 16, "Lava");
		let L17SpeedR23 = new Blocks(13, 16, "Speed", "Right");
		let L17Lava155 = new Blocks(16, 16, "Lava");
		let L17SpeedL24 = new Blocks(19, 16, "Speed", "Left");
		let L17Lava156 = new Blocks(20, 16, "Lava");
		let L17SpeedR24 = new Blocks(21, 16, "Speed", "Right");
		let L17Lava157 = new Blocks(24, 16, "Lava");
		let L17Lava158 = new Blocks(29, 16, "Lava");
		let L17Lava159 = new Blocks(0, 17, "Lava");
		let L17Lava160 = new Blocks(4, 17, "Lava");
		let L17Portal8 = new Blocks(6, 17, "Portal", "", "Portal", 2, 2);
		let L17Lava161 = new Blocks(8, 17, "Lava");
		let L17Portal9 = new Blocks(10, 17, "Portal", "", "Portal", 6, 2);
		let L17Lava162 = new Blocks(12, 17, "Lava");
		let L17Portal10 = new Blocks(14, 17, "Portal", "", "Portal", 10, 2);
		let L17Lava163 = new Blocks(16, 17, "Lava");
		let L17Portal11 = new Blocks(18, 17, "Portal", "", "Portal", 14, 2);
		let L17Lava164 = new Blocks(20, 17, "Lava");
		let L17Portal12 = new Blocks(22, 17, "Portal", "", "Portal", 18, 2);
		let L17Lava165 = new Blocks(24, 17, "Lava");
		let L17Lava166 = new Blocks(29, 17, "Lava");
		let L17Lava167 = new Blocks(0, 18, "Lava");
		let L17Lava168 = new Blocks(4, 18, "Lava");
		let L17Lava169 = new Blocks(8, 18, "Lava");
		let L17Lava170 = new Blocks(12, 18, "Lava");
		let L17Lava171 = new Blocks(16, 18, "Lava");
		let L17Lava172 = new Blocks(20, 18, "Lava");
		let L17Lava173 = new Blocks(24, 18, "Lava");
		let L17Lava174 = new Blocks(29, 18, "Lava");
		let L17Block1 = new Blocks(0, 19, "Block");
		let L17Block2 = new Blocks(1, 19, "Block");
		let L17Block3 = new Blocks(2, 19, "Block");
		let L17Block4 = new Blocks(3, 19, "Block");
		let L17Lava175 = new Blocks(4, 19, "Lava");
		let L17Lava176 = new Blocks(8, 19, "Lava");
		let L17Lava177 = new Blocks(12, 19, "Lava");
		let L17Lava178 = new Blocks(16, 19, "Lava");
		let L17Lava179 = new Blocks(20, 19, "Lava");
		let L17Lava180 = new Blocks(24, 19, "Lava");
		let L17Lava181 = new Blocks(29, 19, "Lava");
		let L17Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L17Lava1,
			L17Lava2,
			L17Lava3,
			L17Lava4,
			L17Lava5,
			L17Lava6,
			L17Lava7,
			L17Lava8,
			L17Lava9,
			L17Lava10,
			L17Lava11,
			L17Lava12,
			L17Lava13,
			L17Lava14,
			L17Lava15,
			L17Lava16,
			L17Lava17,
			L17Lava18,
			L17Lava19,
			L17Lava20,
			L17Lava21,
			L17Lava22,
			L17Lava23,
			L17Lava24,
			L17Lava25,
			L17Lava26,
			L17Lava27,
			L17Lava28,
			L17Lava29,
			L17Lava30,
			L17Lava31,
			L17Lava32,
			L17Lava33,
			L17Lava34,
			L17Lava35,
			L17Lava36,
			L17Lava37,
			L17Lava38,
			L17Lava39,
			L17Portal1,
			L17Lava40,
			L17Portal2,
			L17Lava41,
			L17Portal3,
			L17Lava42,
			L17Portal4,
			L17Lava43,
			L17Portal5,
			L17Lava44,
			L17Portal6,
			L17Lava45,
			L17Lava46,
			L17Lava47,
			L17Lava48,
			L17Lava49,
			L17Lava50,
			L17Lava51,
			L17Lava52,
			L17Lava53,
			L17Portal7,
			L17Lava54,
			L17Lava55,
			L17SpeedL1,
			L17Lava56,
			L17SpeedR1,
			L17Lava57,
			L17SpeedL2,
			L17Lava58,
			L17SpeedR2,
			L17Lava59,
			L17SpeedL3,
			L17Lava60,
			L17SpeedR3,
			L17Lava61,
			L17Lava62,
			L17Lava63,
			L17Lava64,
			L17Lava65,
			L17Lava66,
			L17Lava67,
			L17Lava68,
			L17Lava69,
			L17SpeedL4,
			L17SpeedL5,
			L17SpeedL6,
			L17Lava70,
			L17Lava71,
			L17Lava72,
			L17Lava73,
			L17Lava74,
			L17Lava75,
			L17Lava76,
			L17Lava77,
			L17Lava78,
			L17Lava79,
			L17SpeedR4,
			L17Lava80,
			L17SpeedL7,
			L17Lava81,
			L17SpeedR5,
			L17Lava82,
			L17SpeedL8,
			L17Lava83,
			L17SpeedR6,
			L17Lava84,
			L17SpeedL9,
			L17Lava85,
			L17SpeedR7,
			L17SpeedR8,
			L17SpeedR9,
			L17Lava86,
			L17Lava87,
			L17Lava88,
			L17Lava89,
			L17Lava90,
			L17Lava91,
			L17Lava92,
			L17Lava93,
			L17Lava94,
			L17Lava95,
			L17Lava96,
			L17Lava97,
			L17Lava98,
			L17Lava99,
			L17Lava100,
			L17Lava101,
			L17SpeedL10,
			L17SpeedL11,
			L17SpeedL12,
			L17Lava102,
			L17Lava103,
			L17SpeedL13,
			L17Lava104,
			L17SpeedR10,
			L17Lava105,
			L17SpeedL14,
			L17Lava106,
			L17SpeedR11,
			L17Lava107,
			L17SpeedL15,
			L17Lava108,
			L17SpeedR12,
			L17Lava109,
			L17Lava110,
			L17Lava111,
			L17Lava112,
			L17Lava113,
			L17Lava114,
			L17Lava115,
			L17Lava116,
			L17Lava117,
			L17SpeedR13,
			L17SpeedR14,
			L17SpeedR15,
			L17Lava118,
			L17Lava119,
			L17Lava120,
			L17Lava121,
			L17Lava122,
			L17Lava123,
			L17Lava124,
			L17Lava125,
			L17Lava126,
			L17Lava127,
			L17SpeedR16,
			L17Lava128,
			L17SpeedL16,
			L17Lava129,
			L17SpeedR17,
			L17Lava130,
			L17SpeedL17,
			L17Lava131,
			L17SpeedR18,
			L17Lava132,
			L17SpeedL18,
			L17Lava133,
			L17SpeedL19,
			L17SpeedL20,
			L17SpeedL21,
			L17Lava134,
			L17Lava135,
			L17Lava136,
			L17Lava137,
			L17Lava138,
			L17Lava139,
			L17Lava140,
			L17Lava141,
			L17Lava142,
			L17Lava143,
			L17Lava144,
			L17Lava145,
			L17Lava146,
			L17Lava147,
			L17Lava148,
			L17Lava149,
			L17SpeedR19,
			L17SpeedR20,
			L17SpeedR21,
			L17Lava150,
			L17Lava151,
			L17SpeedL22,
			L17Lava152,
			L17SpeedR22,
			L17Lava153,
			L17SpeedL23,
			L17Lava154,
			L17SpeedR23,
			L17Lava155,
			L17SpeedL24,
			L17Lava156,
			L17SpeedR24,
			L17Lava157,
			L17Lava158,
			L17Lava159,
			L17Lava160,
			L17Portal8,
			L17Lava161,
			L17Portal9,
			L17Lava162,
			L17Portal10,
			L17Lava163,
			L17Portal11,
			L17Lava164,
			L17Portal12,
			L17Lava165,
			L17Lava166,
			L17Lava167,
			L17Lava168,
			L17Lava169,
			L17Lava170,
			L17Lava171,
			L17Lava172,
			L17Lava173,
			L17Lava174,
			L17Block1,
			L17Block2,
			L17Block3,
			L17Block4,
			L17Lava175,
			L17Lava176,
			L17Lava177,
			L17Lava178,
			L17Lava179,
			L17Lava180,
			L17Lava181,
			L17Flag
		]);
		let L18Block1 = new Blocks(26, 0, "Block");
		let L18Block2 = new Blocks(26, 1, "Block");
		let L18LockedPortal1 = new Blocks(
			28,
			1,
			"LockedPortal",
			"",
			"LockedPortal",
			24,
			18
		);
		let L18Block3 = new Blocks(26, 2, "Block");
		let L18Key1 = new Blocks(25, 3, "Key", "", "Key");
		let L18Block4 = new Blocks(26, 3, "Block");
		let L18Red1 = new Blocks(27, 3, "Red");
		let L18Platform1 = new Blocks(28, 3, "Platform");
		let L18Red2 = new Blocks(29, 3, "Red");
		let L18Block5 = new Blocks(11, 4, "Block");
		let L18Block6 = new Blocks(12, 4, "Block");
		let L18Block7 = new Blocks(13, 4, "Block");
		let L18Block8 = new Blocks(23, 4, "Block");
		let L18Block9 = new Blocks(24, 4, "Block");
		let L18Block10 = new Blocks(25, 4, "Block");
		let L18Block11 = new Blocks(26, 4, "Block");
		let L18Blue1 = new Blocks(27, 4, "Blue");
		let L18Blue2 = new Blocks(28, 4, "Blue");
		let L18Platform2 = new Blocks(29, 4, "Platform");
		let L18Platform3 = new Blocks(0, 5, "Platform");
		let L18Platform4 = new Blocks(1, 5, "Platform");
		let L18Block12 = new Blocks(26, 5, "Block");
		let L18Platform5 = new Blocks(27, 5, "Platform");
		let L18Red3 = new Blocks(28, 5, "Red");
		let L18Red4 = new Blocks(29, 5, "Red");
		let L18Block13 = new Blocks(26, 6, "Block");
		let L18Blue3 = new Blocks(27, 6, "Blue");
		let L18Blue4 = new Blocks(28, 6, "Blue");
		let L18Platform6 = new Blocks(29, 6, "Platform");
		let L18Portal1 = new Blocks(0, 7, "Portal", "", "Portal", 25, 9);
		let L18Block14 = new Blocks(26, 7, "Block");
		let L18Red5 = new Blocks(27, 7, "Red");
		let L18Platform7 = new Blocks(28, 7, "Platform");
		let L18Red6 = new Blocks(29, 7, "Red");
		let L18Block15 = new Blocks(0, 8, "Block");
		let L18Block16 = new Blocks(1, 8, "Block");
		let L18Block17 = new Blocks(2, 8, "Block");
		let L18Block18 = new Blocks(3, 8, "Block");
		let L18Block19 = new Blocks(4, 8, "Block");
		let L18Block20 = new Blocks(5, 8, "Block");
		let L18Block21 = new Blocks(6, 8, "Block");
		let L18Block22 = new Blocks(7, 8, "Block");
		let L18Block23 = new Blocks(8, 8, "Block");
		let L18Block24 = new Blocks(9, 8, "Block");
		let L18Block25 = new Blocks(10, 8, "Block");
		let L18Block26 = new Blocks(11, 8, "Block");
		let L18Block27 = new Blocks(12, 8, "Block");
		let L18Block28 = new Blocks(13, 8, "Block");
		let L18Block29 = new Blocks(14, 8, "Block");
		let L18Block30 = new Blocks(15, 8, "Block");
		let L18Block31 = new Blocks(16, 8, "Block");
		let L18Block32 = new Blocks(17, 8, "Block");
		let L18Block33 = new Blocks(18, 8, "Block");
		let L18Block34 = new Blocks(19, 8, "Block");
		let L18Block35 = new Blocks(20, 8, "Block");
		let L18Block36 = new Blocks(21, 8, "Block");
		let L18Block37 = new Blocks(22, 8, "Block");
		let L18Block38 = new Blocks(23, 8, "Block");
		let L18Block39 = new Blocks(24, 8, "Block");
		let L18Block40 = new Blocks(25, 8, "Block");
		let L18Block41 = new Blocks(26, 8, "Block");
		let L18Blue5 = new Blocks(27, 8, "Blue");
		let L18Blue6 = new Blocks(28, 8, "Blue");
		let L18Platform8 = new Blocks(29, 8, "Platform");
		let L18Portal2 = new Blocks(0, 9, "Portal", "", "Portal", 4, 15);
		let L18Portal3 = new Blocks(25, 9, "Portal", "", "Portal", 0, 7);
		let L18Block42 = new Blocks(26, 9, "Block");
		let L18Platform9 = new Blocks(27, 9, "Platform");
		let L18Red7 = new Blocks(28, 9, "Red");
		let L18Red8 = new Blocks(29, 9, "Red");
		let L18Block43 = new Blocks(0, 10, "Block");
		let L18SpeedL1 = new Blocks(1, 10, "Speed", "Left");
		let L18SpeedL2 = new Blocks(2, 10, "Speed", "Left");
		let L18SpeedL3 = new Blocks(3, 10, "Speed", "Left");
		let L18SpeedL4 = new Blocks(4, 10, "Speed", "Left");
		let L18SpeedL5 = new Blocks(5, 10, "Speed", "Left");
		let L18SpeedL6 = new Blocks(6, 10, "Speed", "Left");
		let L18SpeedL7 = new Blocks(7, 10, "Speed", "Left");
		let L18SpeedL8 = new Blocks(8, 10, "Speed", "Left");
		let L18SpeedL9 = new Blocks(9, 10, "Speed", "Left");
		let L18SpeedL10 = new Blocks(10, 10, "Speed", "Left");
		let L18SpeedL11 = new Blocks(11, 10, "Speed", "Left");
		let L18SpeedL12 = new Blocks(12, 10, "Speed", "Left");
		let L18SpeedL13 = new Blocks(13, 10, "Speed", "Left");
		let L18SpeedL14 = new Blocks(14, 10, "Speed", "Left");
		let L18SpeedL15 = new Blocks(15, 10, "Speed", "Left");
		let L18SpeedL16 = new Blocks(16, 10, "Speed", "Left");
		let L18SpeedL17 = new Blocks(17, 10, "Speed", "Left");
		let L18SpeedL18 = new Blocks(18, 10, "Speed", "Left");
		let L18SpeedL19 = new Blocks(19, 10, "Speed", "Left");
		let L18SpeedL20 = new Blocks(20, 10, "Speed", "Left");
		let L18SpeedL21 = new Blocks(21, 10, "Speed", "Left");
		let L18SpeedL22 = new Blocks(22, 10, "Speed", "Left");
		let L18SpeedL23 = new Blocks(23, 10, "Speed", "Left");
		let L18SpeedL24 = new Blocks(24, 10, "Speed", "Left");
		let L18Block44 = new Blocks(25, 10, "Block");
		let L18Block45 = new Blocks(26, 10, "Block");
		let L18Blue7 = new Blocks(27, 10, "Blue");
		let L18Platform10 = new Blocks(28, 10, "Platform");
		let L18Blue8 = new Blocks(29, 10, "Blue");
		let L18Block46 = new Blocks(0, 11, "Block");
		let L18Block47 = new Blocks(1, 11, "Block");
		let L18Block48 = new Blocks(2, 11, "Block");
		let L18Block49 = new Blocks(3, 11, "Block");
		let L18Block50 = new Blocks(4, 11, "Block");
		let L18Block51 = new Blocks(5, 11, "Block");
		let L18Block52 = new Blocks(6, 11, "Block");
		let L18Block53 = new Blocks(7, 11, "Block");
		let L18Block54 = new Blocks(8, 11, "Block");
		let L18Block55 = new Blocks(9, 11, "Block");
		let L18Block56 = new Blocks(10, 11, "Block");
		let L18Block57 = new Blocks(11, 11, "Block");
		let L18Block58 = new Blocks(12, 11, "Block");
		let L18Block59 = new Blocks(13, 11, "Block");
		let L18Block60 = new Blocks(14, 11, "Block");
		let L18Block61 = new Blocks(15, 11, "Block");
		let L18Block62 = new Blocks(16, 11, "Block");
		let L18Block63 = new Blocks(17, 11, "Block");
		let L18Block64 = new Blocks(18, 11, "Block");
		let L18Block65 = new Blocks(19, 11, "Block");
		let L18Block66 = new Blocks(20, 11, "Block");
		let L18Block67 = new Blocks(21, 11, "Block");
		let L18Block68 = new Blocks(22, 11, "Block");
		let L18Block69 = new Blocks(23, 11, "Block");
		let L18Block70 = new Blocks(24, 11, "Block");
		let L18Block71 = new Blocks(25, 11, "Block");
		let L18Block72 = new Blocks(26, 11, "Block");
		let L18Red9 = new Blocks(27, 11, "Red");
		let L18Red10 = new Blocks(28, 11, "Red");
		let L18Platform11 = new Blocks(29, 11, "Platform");
		let L18Block73 = new Blocks(26, 12, "Block");
		let L18Platform12 = new Blocks(27, 12, "Platform");
		let L18Blue9 = new Blocks(28, 12, "Blue");
		let L18Blue10 = new Blocks(29, 12, "Blue");
		let L18Platform13 = new Blocks(1, 13, "Platform");
		let L18Block74 = new Blocks(2, 13, "Block");
		let L18Block75 = new Blocks(3, 13, "Block");
		let L18Lava1 = new Blocks(4, 13, "Lava");
		let L18Block76 = new Blocks(5, 13, "Block");
		let L18Lava2 = new Blocks(6, 13, "Lava");
		let L18Block77 = new Blocks(7, 13, "Block");
		let L18Lava3 = new Blocks(8, 13, "Lava");
		let L18Block78 = new Blocks(9, 13, "Block");
		let L18Lava4 = new Blocks(10, 13, "Lava");
		let L18Block79 = new Blocks(11, 13, "Block");
		let L18Lava5 = new Blocks(12, 13, "Lava");
		let L18Block80 = new Blocks(13, 13, "Block");
		let L18Lava6 = new Blocks(14, 13, "Lava");
		let L18Block81 = new Blocks(15, 13, "Block");
		let L18Lava7 = new Blocks(16, 13, "Lava");
		let L18Block82 = new Blocks(17, 13, "Block");
		let L18Lava8 = new Blocks(18, 13, "Lava");
		let L18Block83 = new Blocks(19, 13, "Block");
		let L18Lava9 = new Blocks(20, 13, "Lava");
		let L18Block84 = new Blocks(21, 13, "Block");
		let L18Lava10 = new Blocks(22, 13, "Lava");
		let L18Block85 = new Blocks(23, 13, "Block");
		let L18Block86 = new Blocks(26, 13, "Block");
		let L18Red11 = new Blocks(27, 13, "Red");
		let L18Red12 = new Blocks(28, 13, "Red");
		let L18Platform14 = new Blocks(29, 13, "Platform");
		let L18Block87 = new Blocks(2, 14, "Block");
		let L18Lava11 = new Blocks(3, 14, "Lava");
		let L18Lava12 = new Blocks(4, 14, "Lava");
		let L18Lava13 = new Blocks(5, 14, "Lava");
		let L18Block88 = new Blocks(6, 14, "Block");
		let L18Lava14 = new Blocks(7, 14, "Lava");
		let L18Block89 = new Blocks(8, 14, "Block");
		let L18Lava15 = new Blocks(9, 14, "Lava");
		let L18Block90 = new Blocks(10, 14, "Block");
		let L18Lava16 = new Blocks(11, 14, "Lava");
		let L18Block91 = new Blocks(12, 14, "Block");
		let L18Lava17 = new Blocks(13, 14, "Lava");
		let L18Block92 = new Blocks(14, 14, "Block");
		let L18Lava18 = new Blocks(15, 14, "Lava");
		let L18Block93 = new Blocks(16, 14, "Block");
		let L18Lava19 = new Blocks(17, 14, "Lava");
		let L18Block94 = new Blocks(18, 14, "Block");
		let L18Lava20 = new Blocks(19, 14, "Lava");
		let L18Block95 = new Blocks(20, 14, "Block");
		let L18Lava21 = new Blocks(21, 14, "Lava");
		let L18Block96 = new Blocks(22, 14, "Block");
		let L18Lava22 = new Blocks(23, 14, "Lava");
		let L18Block97 = new Blocks(26, 14, "Block");
		let L18Blue11 = new Blocks(27, 14, "Blue");
		let L18Platform15 = new Blocks(28, 14, "Platform");
		let L18Blue12 = new Blocks(29, 14, "Blue");
		let L18Block98 = new Blocks(2, 15, "Block");
		let L18Block99 = new Blocks(3, 15, "Block");
		let L18Portal4 = new Blocks(4, 15, "Portal", "", "Portal", 0, 9);
		let L18Block100 = new Blocks(26, 15, "Block");
		let L18Red13 = new Blocks(27, 15, "Red");
		let L18Red14 = new Blocks(28, 15, "Red");
		let L18Platform16 = new Blocks(29, 15, "Platform");
		let L18Block101 = new Blocks(2, 16, "Block");
		let L18Block102 = new Blocks(3, 16, "Block");
		let L18Block103 = new Blocks(4, 16, "Block");
		let L18Block104 = new Blocks(5, 16, "Block");
		let L18Lava23 = new Blocks(6, 16, "Lava");
		let L18Block105 = new Blocks(7, 16, "Block");
		let L18Lava24 = new Blocks(8, 16, "Lava");
		let L18Block106 = new Blocks(9, 16, "Block");
		let L18Lava25 = new Blocks(10, 16, "Lava");
		let L18Block107 = new Blocks(11, 16, "Block");
		let L18Lava26 = new Blocks(12, 16, "Lava");
		let L18Block108 = new Blocks(13, 16, "Block");
		let L18Lava27 = new Blocks(14, 16, "Lava");
		let L18Block109 = new Blocks(15, 16, "Block");
		let L18Lava28 = new Blocks(16, 16, "Lava");
		let L18Block110 = new Blocks(17, 16, "Block");
		let L18Lava29 = new Blocks(18, 16, "Lava");
		let L18Block111 = new Blocks(19, 16, "Block");
		let L18Lava30 = new Blocks(20, 16, "Lava");
		let L18Block112 = new Blocks(21, 16, "Block");
		let L18Lava31 = new Blocks(22, 16, "Lava");
		let L18Block113 = new Blocks(23, 16, "Block");
		let L18Block114 = new Blocks(24, 16, "Block");
		let L18Block115 = new Blocks(25, 16, "Block");
		let L18Block116 = new Blocks(26, 16, "Block");
		let L18Platform17 = new Blocks(27, 16, "Platform");
		let L18Blue13 = new Blocks(28, 16, "Blue");
		let L18Blue14 = new Blocks(29, 16, "Blue");
		let L18Block117 = new Blocks(2, 17, "Block");
		let L18Lava32 = new Blocks(3, 17, "Lava");
		let L18Lava33 = new Blocks(4, 17, "Lava");
		let L18Lava34 = new Blocks(5, 17, "Lava");
		let L18Lava35 = new Blocks(6, 17, "Lava");
		let L18Lava36 = new Blocks(7, 17, "Lava");
		let L18Lava37 = new Blocks(8, 17, "Lava");
		let L18Lava38 = new Blocks(9, 17, "Lava");
		let L18Lava39 = new Blocks(10, 17, "Lava");
		let L18Lava40 = new Blocks(11, 17, "Lava");
		let L18Lava41 = new Blocks(12, 17, "Lava");
		let L18Lava42 = new Blocks(13, 17, "Lava");
		let L18Lava43 = new Blocks(14, 17, "Lava");
		let L18Lava44 = new Blocks(15, 17, "Lava");
		let L18Lava45 = new Blocks(16, 17, "Lava");
		let L18Lava46 = new Blocks(17, 17, "Lava");
		let L18Lava47 = new Blocks(18, 17, "Lava");
		let L18Lava48 = new Blocks(19, 17, "Lava");
		let L18Lava49 = new Blocks(20, 17, "Lava");
		let L18Lava50 = new Blocks(21, 17, "Lava");
		let L18Lava51 = new Blocks(22, 17, "Lava");
		let L18Lava52 = new Blocks(23, 17, "Lava");
		let L18Lava53 = new Blocks(24, 17, "Lava");
		let L18Lava54 = new Blocks(25, 17, "Lava");
		let L18Block118 = new Blocks(26, 17, "Block");
		let L18LockedPortal2 = new Blocks(
			24,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			28,
			1
		);
		let L18Block119 = new Blocks(26, 18, "Block");
		let L18SpeedU1 = new Blocks(0, 19, "Speed", "Up");
		let L18Block120 = new Blocks(1, 19, "Block");
		let L18Block121 = new Blocks(2, 19, "Block");
		let L18Red15 = new Blocks(3, 19, "Red");
		let L18Blue15 = new Blocks(4, 19, "Blue");
		let L18Red16 = new Blocks(5, 19, "Red");
		let L18Blue16 = new Blocks(6, 19, "Blue");
		let L18Red17 = new Blocks(7, 19, "Red");
		let L18Blue17 = new Blocks(8, 19, "Blue");
		let L18Red18 = new Blocks(9, 19, "Red");
		let L18Blue18 = new Blocks(10, 19, "Blue");
		let L18Red19 = new Blocks(11, 19, "Red");
		let L18Blue19 = new Blocks(12, 19, "Blue");
		let L18Red20 = new Blocks(13, 19, "Red");
		let L18Blue20 = new Blocks(14, 19, "Blue");
		let L18Red21 = new Blocks(15, 19, "Red");
		let L18Blue21 = new Blocks(16, 19, "Blue");
		let L18Red22 = new Blocks(17, 19, "Red");
		let L18Blue22 = new Blocks(18, 19, "Blue");
		let L18Red23 = new Blocks(19, 19, "Red");
		let L18Blue23 = new Blocks(20, 19, "Blue");
		let L18Red24 = new Blocks(21, 19, "Red");
		let L18Blue24 = new Blocks(22, 19, "Blue");
		let L18Block122 = new Blocks(23, 19, "Block");
		let L18Block123 = new Blocks(24, 19, "Block");
		let L18Block124 = new Blocks(25, 19, "Block");
		let L18Block125 = new Blocks(26, 19, "Block");
		let L18Block126 = new Blocks(27, 19, "Block");
		let L18Block127 = new Blocks(28, 19, "Block");
		let L18Block128 = new Blocks(29, 19, "Block");
		let L18Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L18Block1,
			L18Block2,
			L18LockedPortal1,
			L18Block3,
			L18Key1,
			L18Block4,
			L18Red1,
			L18Platform1,
			L18Red2,
			L18Block5,
			L18Block6,
			L18Block7,
			L18Block8,
			L18Block9,
			L18Block10,
			L18Block11,
			L18Blue1,
			L18Blue2,
			L18Platform2,
			L18Platform3,
			L18Platform4,
			L18Block12,
			L18Platform5,
			L18Red3,
			L18Red4,
			L18Block13,
			L18Blue3,
			L18Blue4,
			L18Platform6,
			L18Portal1,
			L18Block14,
			L18Red5,
			L18Platform7,
			L18Red6,
			L18Block15,
			L18Block16,
			L18Block17,
			L18Block18,
			L18Block19,
			L18Block20,
			L18Block21,
			L18Block22,
			L18Block23,
			L18Block24,
			L18Block25,
			L18Block26,
			L18Block27,
			L18Block28,
			L18Block29,
			L18Block30,
			L18Block31,
			L18Block32,
			L18Block33,
			L18Block34,
			L18Block35,
			L18Block36,
			L18Block37,
			L18Block38,
			L18Block39,
			L18Block40,
			L18Block41,
			L18Blue5,
			L18Blue6,
			L18Platform8,
			L18Portal2,
			L18Portal3,
			L18Block42,
			L18Platform9,
			L18Red7,
			L18Red8,
			L18Block43,
			L18SpeedL1,
			L18SpeedL2,
			L18SpeedL3,
			L18SpeedL4,
			L18SpeedL5,
			L18SpeedL6,
			L18SpeedL7,
			L18SpeedL8,
			L18SpeedL9,
			L18SpeedL10,
			L18SpeedL11,
			L18SpeedL12,
			L18SpeedL13,
			L18SpeedL14,
			L18SpeedL15,
			L18SpeedL16,
			L18SpeedL17,
			L18SpeedL18,
			L18SpeedL19,
			L18SpeedL20,
			L18SpeedL21,
			L18SpeedL22,
			L18SpeedL23,
			L18SpeedL24,
			L18Block44,
			L18Block45,
			L18Blue7,
			L18Platform10,
			L18Blue8,
			L18Block46,
			L18Block47,
			L18Block48,
			L18Block49,
			L18Block50,
			L18Block51,
			L18Block52,
			L18Block53,
			L18Block54,
			L18Block55,
			L18Block56,
			L18Block57,
			L18Block58,
			L18Block59,
			L18Block60,
			L18Block61,
			L18Block62,
			L18Block63,
			L18Block64,
			L18Block65,
			L18Block66,
			L18Block67,
			L18Block68,
			L18Block69,
			L18Block70,
			L18Block71,
			L18Block72,
			L18Red9,
			L18Red10,
			L18Platform11,
			L18Block73,
			L18Platform12,
			L18Blue9,
			L18Blue10,
			L18Platform13,
			L18Block74,
			L18Block75,
			L18Lava1,
			L18Block76,
			L18Lava2,
			L18Block77,
			L18Lava3,
			L18Block78,
			L18Lava4,
			L18Block79,
			L18Lava5,
			L18Block80,
			L18Lava6,
			L18Block81,
			L18Lava7,
			L18Block82,
			L18Lava8,
			L18Block83,
			L18Lava9,
			L18Block84,
			L18Lava10,
			L18Block85,
			L18Block86,
			L18Red11,
			L18Red12,
			L18Platform14,
			L18Block87,
			L18Lava11,
			L18Lava12,
			L18Lava13,
			L18Block88,
			L18Lava14,
			L18Block89,
			L18Lava15,
			L18Block90,
			L18Lava16,
			L18Block91,
			L18Lava17,
			L18Block92,
			L18Lava18,
			L18Block93,
			L18Lava19,
			L18Block94,
			L18Lava20,
			L18Block95,
			L18Lava21,
			L18Block96,
			L18Lava22,
			L18Block97,
			L18Blue11,
			L18Platform15,
			L18Blue12,
			L18Block98,
			L18Block99,
			L18Portal4,
			L18Block100,
			L18Red13,
			L18Red14,
			L18Platform16,
			L18Block101,
			L18Block102,
			L18Block103,
			L18Block104,
			L18Lava23,
			L18Block105,
			L18Lava24,
			L18Block106,
			L18Lava25,
			L18Block107,
			L18Lava26,
			L18Block108,
			L18Lava27,
			L18Block109,
			L18Lava28,
			L18Block110,
			L18Lava29,
			L18Block111,
			L18Lava30,
			L18Block112,
			L18Lava31,
			L18Block113,
			L18Block114,
			L18Block115,
			L18Block116,
			L18Platform17,
			L18Blue13,
			L18Blue14,
			L18Block117,
			L18Lava32,
			L18Lava33,
			L18Lava34,
			L18Lava35,
			L18Lava36,
			L18Lava37,
			L18Lava38,
			L18Lava39,
			L18Lava40,
			L18Lava41,
			L18Lava42,
			L18Lava43,
			L18Lava44,
			L18Lava45,
			L18Lava46,
			L18Lava47,
			L18Lava48,
			L18Lava49,
			L18Lava50,
			L18Lava51,
			L18Lava52,
			L18Lava53,
			L18Lava54,
			L18Block118,
			L18LockedPortal2,
			L18Block119,
			L18SpeedU1,
			L18Block120,
			L18Block121,
			L18Red15,
			L18Blue15,
			L18Red16,
			L18Blue16,
			L18Red17,
			L18Blue17,
			L18Red18,
			L18Blue18,
			L18Red19,
			L18Blue19,
			L18Red20,
			L18Blue20,
			L18Red21,
			L18Blue21,
			L18Red22,
			L18Blue22,
			L18Red23,
			L18Blue23,
			L18Red24,
			L18Blue24,
			L18Block122,
			L18Block123,
			L18Block124,
			L18Block125,
			L18Block126,
			L18Block127,
			L18Block128,
			L18Flag
		]);
		let L19Key1 = new Blocks(4, 0, "Key", "", "Key");
		let L19Key2 = new Blocks(5, 0, "Key", "", "Key");
		let L19LockedPortal1 = new Blocks(
			6,
			0,
			"LockedPortal",
			"",
			"LockedPortal",
			0,
			12
		);
		let L19Block1 = new Blocks(7, 0, "Block");
		let L19Block2 = new Blocks(14, 0, "Block");
		let L19Block3 = new Blocks(15, 0, "Block");
		let L19LockedPortal2 = new Blocks(
			16,
			0,
			"LockedPortal",
			"",
			"LockedPortal",
			24,
			18
		);
		let L19Block4 = new Blocks(1, 1, "Block");
		let L19Block5 = new Blocks(2, 1, "Block");
		let L19Block6 = new Blocks(3, 1, "Block");
		let L19Block7 = new Blocks(4, 1, "Block");
		let L19Block8 = new Blocks(5, 1, "Block");
		let L19Block9 = new Blocks(6, 1, "Block");
		let L19Block10 = new Blocks(7, 1, "Block");
		let L19Block11 = new Blocks(14, 1, "Block");
		let L19Block12 = new Blocks(15, 1, "Block");
		let L19SpeedL1 = new Blocks(16, 1, "Speed", "Left");
		let L19SpeedL2 = new Blocks(17, 1, "Speed", "Left");
		let L19SpeedL3 = new Blocks(18, 1, "Speed", "Left");
		let L19SpeedL4 = new Blocks(19, 1, "Speed", "Left");
		let L19SpeedL5 = new Blocks(20, 1, "Speed", "Left");
		let L19SpeedL6 = new Blocks(21, 1, "Speed", "Left");
		let L19SpeedL7 = new Blocks(22, 1, "Speed", "Left");
		let L19SpeedL8 = new Blocks(23, 1, "Speed", "Left");
		let L19SpeedL9 = new Blocks(24, 1, "Speed", "Left");
		let L19SpeedL10 = new Blocks(25, 1, "Speed", "Left");
		let L19SpeedL11 = new Blocks(26, 1, "Speed", "Left");
		let L19SpeedL12 = new Blocks(27, 1, "Speed", "Left");
		let L19SpeedL13 = new Blocks(28, 1, "Speed", "Left");
		let L19Platform1 = new Blocks(29, 1, "Platform");
		let L19Lava1 = new Blocks(9, 2, "Lava");
		let L19Lava2 = new Blocks(10, 2, "Lava");
		let L19Lava3 = new Blocks(11, 2, "Lava");
		let L19Lava4 = new Blocks(12, 2, "Lava");
		let L19Block13 = new Blocks(14, 2, "Block");
		let L19Block14 = new Blocks(15, 2, "Block");
		let L19Block15 = new Blocks(21, 2, "Block");
		let L19Lava5 = new Blocks(25, 2, "Lava");
		let L19Block16 = new Blocks(0, 3, "Block");
		let L19Block17 = new Blocks(1, 3, "Block");
		let L19Block18 = new Blocks(2, 3, "Block");
		let L19Block19 = new Blocks(3, 3, "Block");
		let L19Block20 = new Blocks(4, 3, "Block");
		let L19Block21 = new Blocks(5, 3, "Block");
		let L19Block22 = new Blocks(6, 3, "Block");
		let L19Block23 = new Blocks(7, 3, "Block");
		let L19Block24 = new Blocks(8, 3, "Block");
		let L19Lava6 = new Blocks(9, 3, "Lava");
		let L19Platform2 = new Blocks(10, 3, "Platform");
		let L19Platform3 = new Blocks(11, 3, "Platform");
		let L19Platform4 = new Blocks(12, 3, "Platform");
		let L19Platform5 = new Blocks(13, 3, "Platform");
		let L19Lava7 = new Blocks(14, 3, "Lava");
		let L19Block25 = new Blocks(15, 3, "Block");
		let L19Block26 = new Blocks(21, 3, "Block");
		let L19Lava8 = new Blocks(25, 3, "Lava");
		let L19Lava9 = new Blocks(9, 4, "Lava");
		let L19SpeedR1 = new Blocks(11, 4, "Speed", "Right");
		let L19SpeedR2 = new Blocks(12, 4, "Speed", "Right");
		let L19SpeedR3 = new Blocks(13, 4, "Speed", "Right");
		let L19Lava10 = new Blocks(14, 4, "Lava");
		let L19Block27 = new Blocks(15, 4, "Block");
		let L19Platform6 = new Blocks(16, 4, "Platform");
		let L19Platform7 = new Blocks(17, 4, "Platform");
		let L19Platform8 = new Blocks(18, 4, "Platform");
		let L19Block28 = new Blocks(19, 4, "Block");
		let L19Block29 = new Blocks(21, 4, "Block");
		let L19Lava11 = new Blocks(25, 4, "Lava");
		let L19Block30 = new Blocks(27, 4, "Block");
		let L19Block31 = new Blocks(28, 4, "Block");
		let L19Block32 = new Blocks(29, 4, "Block");
		let L19Platform9 = new Blocks(0, 5, "Platform");
		let L19Block33 = new Blocks(1, 5, "Block");
		let L19Block34 = new Blocks(2, 5, "Block");
		let L19Block35 = new Blocks(3, 5, "Block");
		let L19Block36 = new Blocks(4, 5, "Block");
		let L19SpeedR4 = new Blocks(5, 5, "Speed", "Right");
		let L19SpeedR5 = new Blocks(6, 5, "Speed", "Right");
		let L19SpeedR6 = new Blocks(7, 5, "Speed", "Right");
		let L19Lava12 = new Blocks(9, 5, "Lava");
		let L19Lava13 = new Blocks(14, 5, "Lava");
		let L19Block37 = new Blocks(15, 5, "Block");
		let L19Block38 = new Blocks(19, 5, "Block");
		let L19Block39 = new Blocks(21, 5, "Block");
		let L19Platform10 = new Blocks(22, 5, "Platform");
		let L19Block40 = new Blocks(23, 5, "Block");
		let L19Red1 = new Blocks(24, 5, "Red");
		let L19Lava14 = new Blocks(25, 5, "Lava");
		let L19Block41 = new Blocks(7, 6, "Block");
		let L19Lava15 = new Blocks(9, 6, "Lava");
		let L19SpeedL14 = new Blocks(10, 6, "Speed", "Left");
		let L19SpeedL15 = new Blocks(11, 6, "Speed", "Left");
		let L19SpeedL16 = new Blocks(12, 6, "Speed", "Left");
		let L19Lava16 = new Blocks(14, 6, "Lava");
		let L19Block42 = new Blocks(15, 6, "Block");
		let L19Block43 = new Blocks(19, 6, "Block");
		let L19Block44 = new Blocks(21, 6, "Block");
		let L19Block45 = new Blocks(23, 6, "Block");
		let L19Lava17 = new Blocks(25, 6, "Lava");
		let L19SpeedR7 = new Blocks(26, 6, "Speed", "Right");
		let L19SpeedR8 = new Blocks(27, 6, "Speed", "Right");
		let L19SpeedR9 = new Blocks(28, 6, "Speed", "Right");
		let L19Block46 = new Blocks(7, 7, "Block");
		let L19Lava18 = new Blocks(14, 7, "Lava");
		let L19Block47 = new Blocks(15, 7, "Block");
		let L19Platform11 = new Blocks(16, 7, "Platform");
		let L19Platform12 = new Blocks(17, 7, "Platform");
		let L19Platform13 = new Blocks(18, 7, "Platform");
		let L19Block48 = new Blocks(19, 7, "Block");
		let L19Block49 = new Blocks(21, 7, "Block");
		let L19Block492 = new Blocks(23, 7, "Block");
		let L19Block50 = new Blocks(7, 8, "Block");
		let L19Block51 = new Blocks(8, 8, "Block");
		let L19Block52 = new Blocks(9, 8, "Block");
		let L19Block53 = new Blocks(10, 8, "Block");
		let L19SpeedR10 = new Blocks(11, 8, "Speed", "Right");
		let L19SpeedR11 = new Blocks(12, 8, "Speed", "Right");
		let L19SpeedR12 = new Blocks(13, 8, "Speed", "Right");
		let L19Block54 = new Blocks(14, 8, "Block");
		let L19Block55 = new Blocks(15, 8, "Block");
		let L19Block56 = new Blocks(19, 8, "Block");
		let L19Platform14 = new Blocks(21, 8, "Platform");
		let L19Platform15 = new Blocks(22, 8, "Platform");
		let L19Block57 = new Blocks(23, 8, "Block");
		let L19Blue1 = new Blocks(24, 8, "Blue");
		let L19Blue2 = new Blocks(25, 8, "Blue");
		let L19Blue3 = new Blocks(26, 8, "Blue");
		let L19Blue4 = new Blocks(27, 8, "Blue");
		let L19Blue5 = new Blocks(28, 8, "Blue");
		let L19Blue6 = new Blocks(29, 8, "Blue");
		let L19Lava19 = new Blocks(8, 9, "Lava");
		let L19Block58 = new Blocks(14, 9, "Block");
		let L19Block59 = new Blocks(15, 9, "Block");
		let L19Block60 = new Blocks(19, 9, "Block");
		let L19Block61 = new Blocks(23, 9, "Block");
		let L19SpeedU1 = new Blocks(0, 10, "Speed", "Up");
		let L19Lava20 = new Blocks(1, 10, "Lava");
		let L19Lava21 = new Blocks(2, 10, "Lava");
		let L19Lava22 = new Blocks(3, 10, "Lava");
		let L19Lava23 = new Blocks(4, 10, "Lava");
		let L19Lava24 = new Blocks(5, 10, "Lava");
		let L19Block62 = new Blocks(6, 10, "Block");
		let L19Lava25 = new Blocks(8, 10, "Lava");
		let L19Block63 = new Blocks(14, 10, "Block");
		let L19Block64 = new Blocks(15, 10, "Block");
		let L19Platform16 = new Blocks(16, 10, "Platform");
		let L19Platform17 = new Blocks(17, 10, "Platform");
		let L19Platform18 = new Blocks(18, 10, "Platform");
		let L19Block65 = new Blocks(19, 10, "Block");
		let L19Block66 = new Blocks(23, 10, "Block");
		let L19Block67 = new Blocks(0, 11, "Block");
		let L19Block68 = new Blocks(1, 11, "Block");
		let L19Block69 = new Blocks(2, 11, "Block");
		let L19Block70 = new Blocks(3, 11, "Block");
		let L19Block71 = new Blocks(4, 11, "Block");
		let L19Block72 = new Blocks(5, 11, "Block");
		let L19Block73 = new Blocks(6, 11, "Block");
		let L19Lava26 = new Blocks(8, 11, "Lava");
		let L19Lava27 = new Blocks(10, 11, "Lava");
		let L19Block74 = new Blocks(14, 11, "Block");
		let L19Block75 = new Blocks(15, 11, "Block");
		let L19Block76 = new Blocks(19, 11, "Block");
		let L19Purple1 = new Blocks(20, 11, "Purple");
		let L19Purple2 = new Blocks(21, 11, "Purple");
		let L19Purple3 = new Blocks(22, 11, "Purple");
		let L19Block77 = new Blocks(23, 11, "Block");
		let L19LockedPortal3 = new Blocks(
			0,
			12,
			"LockedPortal",
			"",
			"LockedPortal",
			6,
			0
		);
		let L19Lava28 = new Blocks(10, 12, "Lava");
		let L19Block78 = new Blocks(14, 12, "Block");
		let L19Block79 = new Blocks(15, 12, "Block");
		let L19Block80 = new Blocks(19, 12, "Block");
		let L19Lava29 = new Blocks(20, 12, "Lava");
		let L19Lava30 = new Blocks(21, 12, "Lava");
		let L19Lava31 = new Blocks(22, 12, "Lava");
		let L19Lava32 = new Blocks(23, 12, "Lava");
		let L19Lava33 = new Blocks(24, 12, "Lava");
		let L19Lava34 = new Blocks(25, 12, "Lava");
		let L19Lava35 = new Blocks(26, 12, "Lava");
		let L19Lava36 = new Blocks(27, 12, "Lava");
		let L19Lava37 = new Blocks(28, 12, "Lava");
		let L19Lava38 = new Blocks(29, 12, "Lava");
		let L19Block81 = new Blocks(0, 13, "Block");
		let L19Block82 = new Blocks(1, 13, "Block");
		let L19Block83 = new Blocks(2, 13, "Block");
		let L19Block84 = new Blocks(3, 13, "Block");
		let L19Block85 = new Blocks(4, 13, "Block");
		let L19Block86 = new Blocks(5, 13, "Block");
		let L19Block87 = new Blocks(6, 13, "Block");
		let L19Block88 = new Blocks(7, 13, "Block");
		let L19Block89 = new Blocks(8, 13, "Block");
		let L19Block90 = new Blocks(9, 13, "Block");
		let L19Block91 = new Blocks(10, 13, "Block");
		let L19Red2 = new Blocks(11, 13, "Red");
		let L19Red3 = new Blocks(12, 13, "Red");
		let L19Red4 = new Blocks(13, 13, "Red");
		let L19Block92 = new Blocks(14, 13, "Block");
		let L19Block93 = new Blocks(15, 13, "Block");
		let L19Blue7 = new Blocks(16, 13, "Blue");
		let L19Blue8 = new Blocks(17, 13, "Blue");
		let L19Blue9 = new Blocks(18, 13, "Blue");
		let L19Block94 = new Blocks(19, 13, "Block");
		let L19Block95 = new Blocks(20, 13, "Block");
		let L19Block96 = new Blocks(21, 13, "Block");
		let L19Block97 = new Blocks(22, 13, "Block");
		let L19Block98 = new Blocks(23, 13, "Block");
		let L19Block99 = new Blocks(24, 13, "Block");
		let L19Block100 = new Blocks(25, 13, "Block");
		let L19Block101 = new Blocks(26, 13, "Block");
		let L19Block102 = new Blocks(27, 13, "Block");
		let L19Block103 = new Blocks(28, 13, "Block");
		let L19Block104 = new Blocks(29, 13, "Block");
		let L19Platform19 = new Blocks(0, 16, "Platform");
		let L19Platform20 = new Blocks(1, 16, "Platform");
		let L19Platform21 = new Blocks(2, 16, "Platform");
		let L19Platform22 = new Blocks(3, 16, "Platform");
		let L19Platform23 = new Blocks(4, 16, "Platform");
		let L19Platform24 = new Blocks(5, 16, "Platform");
		let L19Platform25 = new Blocks(6, 16, "Platform");
		let L19Platform26 = new Blocks(7, 16, "Platform");
		let L19Platform27 = new Blocks(8, 16, "Platform");
		let L19Platform28 = new Blocks(9, 16, "Platform");
		let L19Platform29 = new Blocks(10, 16, "Platform");
		let L19Platform30 = new Blocks(11, 16, "Platform");
		let L19Platform31 = new Blocks(12, 16, "Platform");
		let L19Platform32 = new Blocks(13, 16, "Platform");
		let L19Platform33 = new Blocks(14, 16, "Platform");
		let L19Platform34 = new Blocks(15, 16, "Platform");
		let L19Platform35 = new Blocks(16, 16, "Platform");
		let L19Platform36 = new Blocks(17, 16, "Platform");
		let L19Platform37 = new Blocks(18, 16, "Platform");
		let L19Platform38 = new Blocks(19, 16, "Platform");
		let L19Platform39 = new Blocks(20, 16, "Platform");
		let L19Platform40 = new Blocks(21, 16, "Platform");
		let L19Platform41 = new Blocks(22, 16, "Platform");
		let L19Platform42 = new Blocks(23, 16, "Platform");
		let L19Platform43 = new Blocks(24, 16, "Platform");
		let L19Platform44 = new Blocks(25, 16, "Platform");
		let L19Block105 = new Blocks(26, 16, "Block");
		let L19Platform45 = new Blocks(27, 16, "Platform");
		let L19Platform46 = new Blocks(28, 16, "Platform");
		let L19Platform47 = new Blocks(29, 16, "Platform");
		let L19Block106 = new Blocks(26, 17, "Block");
		let L19LockedPortal4 = new Blocks(
			25,
			18,
			"LockedPortal",
			"",
			"LockedPortal",
			16,
			0
		);
		let L19Block107 = new Blocks(26, 18, "Block");
		let L19Portal1 = new Blocks(29, 18, "Portal", "", "Portal", 1, 19);
		let L19Portal2 = new Blocks(1, 19, "Portal", "", "Portal", 29 + 2 / 24, 18);
		let L19SpeedL17 = new Blocks(4, 19, "Speed", "Left");
		let L19SpeedL18 = new Blocks(5, 19, "Speed", "Left");
		let L19SpeedL19 = new Blocks(6, 19, "Speed", "Left");
		let L19SpeedL20 = new Blocks(7, 19, "Speed", "Left");
		let L19SpeedL21 = new Blocks(8, 19, "Speed", "Left");
		let L19SpeedL22 = new Blocks(9, 19, "Speed", "Left");
		let L19SpeedL23 = new Blocks(10, 19, "Speed", "Left");
		let L19SpeedL24 = new Blocks(11, 19, "Speed", "Left");
		let L19SpeedL25 = new Blocks(12, 19, "Speed", "Left");
		let L19SpeedL26 = new Blocks(13, 19, "Speed", "Left");
		let L19SpeedL27 = new Blocks(14, 19, "Speed", "Left");
		let L19SpeedL28 = new Blocks(15, 19, "Speed", "Left");
		let L19SpeedL29 = new Blocks(16, 19, "Speed", "Left");
		let L19SpeedL30 = new Blocks(17, 19, "Speed", "Left");
		let L19SpeedL31 = new Blocks(18, 19, "Speed", "Left");
		let L19SpeedL32 = new Blocks(19, 19, "Speed", "Left");
		let L19SpeedL33 = new Blocks(20, 19, "Speed", "Left");
		let L19SpeedL34 = new Blocks(21, 19, "Speed", "Left");
		let L19SpeedL35 = new Blocks(22, 19, "Speed", "Left");
		let L19SpeedL36 = new Blocks(23, 19, "Speed", "Left");
		let L19SpeedL37 = new Blocks(24, 19, "Speed", "Left");
		let L19SpeedL38 = new Blocks(25, 19, "Speed", "Left");
		let L19Block108 = new Blocks(26, 19, "Block");
		let L19Block109 = new Blocks(27, 19, "Block");
		let L19Block110 = new Blocks(28, 19, "Block");
		let L19SpeedU2 = new Blocks(29, 19, "Speed", "Up");
		let L19Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L19Block492,
			L19Key1,
			L19Key2,
			L19LockedPortal1,
			L19Block1,
			L19Block2,
			L19Block3,
			L19LockedPortal2,
			L19Block4,
			L19Block5,
			L19Block6,
			L19Block7,
			L19Block8,
			L19Block9,
			L19Block10,
			L19Block11,
			L19Block12,
			L19SpeedL1,
			L19SpeedL2,
			L19SpeedL3,
			L19SpeedL4,
			L19SpeedL5,
			L19SpeedL6,
			L19SpeedL7,
			L19SpeedL8,
			L19SpeedL9,
			L19SpeedL10,
			L19SpeedL11,
			L19SpeedL12,
			L19SpeedL13,
			L19Platform1,
			L19Lava1,
			L19Lava2,
			L19Lava3,
			L19Lava4,
			L19Block13,
			L19Block14,
			L19Block15,
			L19Lava5,
			L19Block16,
			L19Block17,
			L19Block18,
			L19Block19,
			L19Block20,
			L19Block21,
			L19Block22,
			L19Block23,
			L19Block24,
			L19Lava6,
			L19Platform2,
			L19Platform3,
			L19Platform4,
			L19Platform5,
			L19Lava7,
			L19Block25,
			L19Block26,
			L19Lava8,
			L19Lava9,
			L19SpeedR1,
			L19SpeedR2,
			L19SpeedR3,
			L19Lava10,
			L19Block27,
			L19Platform6,
			L19Platform7,
			L19Platform8,
			L19Block28,
			L19Block29,
			L19Lava11,
			L19Block30,
			L19Block31,
			L19Block32,
			L19Platform9,
			L19Block33,
			L19Block34,
			L19Block35,
			L19Block36,
			L19SpeedR4,
			L19SpeedR5,
			L19SpeedR6,
			L19Lava12,
			L19Lava13,
			L19Block37,
			L19Block38,
			L19Block39,
			L19Platform10,
			L19Block40,
			L19Red1,
			L19Lava14,
			L19Block41,
			L19Lava15,
			L19SpeedL14,
			L19SpeedL15,
			L19SpeedL16,
			L19Lava16,
			L19Block42,
			L19Block43,
			L19Block44,
			L19Block45,
			L19Lava17,
			L19SpeedR7,
			L19SpeedR8,
			L19SpeedR9,
			L19Block46,
			L19Lava18,
			L19Block47,
			L19Platform11,
			L19Platform12,
			L19Platform13,
			L19Block48,
			L19Block49,
			L19Block50,
			L19Block51,
			L19Block52,
			L19Block53,
			L19SpeedR10,
			L19SpeedR11,
			L19SpeedR12,
			L19Block54,
			L19Block55,
			L19Block56,
			L19Platform14,
			L19Platform15,
			L19Block57,
			L19Blue1,
			L19Blue2,
			L19Blue3,
			L19Blue4,
			L19Blue5,
			L19Blue6,
			L19Lava19,
			L19Block58,
			L19Block59,
			L19Block60,
			L19Block61,
			L19SpeedU1,
			L19Lava20,
			L19Lava21,
			L19Lava22,
			L19Lava23,
			L19Lava24,
			L19Block62,
			L19Lava25,
			L19Block63,
			L19Block64,
			L19Platform16,
			L19Platform17,
			L19Platform18,
			L19Block65,
			L19Block66,
			L19Block67,
			L19Block68,
			L19Block69,
			L19Block70,
			L19Block71,
			L19Block72,
			L19Block73,
			L19Lava26,
			L19Lava27,
			L19Block74,
			L19Block75,
			L19Block76,
			L19Purple1,
			L19Purple2,
			L19Purple3,
			L19Block77,
			L19LockedPortal3,
			L19Lava28,
			L19Block78,
			L19Block79,
			L19Block80,
			L19Lava29,
			L19Lava30,
			L19Lava31,
			L19Lava32,
			L19Lava33,
			L19Lava34,
			L19Lava35,
			L19Lava36,
			L19Lava37,
			L19Lava38,
			L19Block81,
			L19Block82,
			L19Block83,
			L19Block84,
			L19Block85,
			L19Block86,
			L19Block87,
			L19Block88,
			L19Block89,
			L19Block90,
			L19Block91,
			L19Red2,
			L19Red3,
			L19Red4,
			L19Block92,
			L19Block93,
			L19Blue7,
			L19Blue8,
			L19Blue9,
			L19Block94,
			L19Block95,
			L19Block96,
			L19Block97,
			L19Block98,
			L19Block99,
			L19Block100,
			L19Block101,
			L19Block102,
			L19Block103,
			L19Block104,
			L19Platform19,
			L19Platform20,
			L19Platform21,
			L19Platform22,
			L19Platform23,
			L19Platform24,
			L19Platform25,
			L19Platform26,
			L19Platform27,
			L19Platform28,
			L19Platform29,
			L19Platform30,
			L19Platform31,
			L19Platform32,
			L19Platform33,
			L19Platform34,
			L19Platform35,
			L19Platform36,
			L19Platform37,
			L19Platform38,
			L19Platform39,
			L19Platform40,
			L19Platform41,
			L19Platform42,
			L19Platform43,
			L19Platform44,
			L19Block105,
			L19Platform45,
			L19Platform46,
			L19Platform47,
			L19Block106,
			L19LockedPortal4,
			L19Block107,
			L19Portal1,
			L19Portal2,
			L19SpeedL17,
			L19SpeedL18,
			L19SpeedL19,
			L19SpeedL20,
			L19SpeedL21,
			L19SpeedL22,
			L19SpeedL23,
			L19SpeedL24,
			L19SpeedL25,
			L19SpeedL26,
			L19SpeedL27,
			L19SpeedL28,
			L19SpeedL29,
			L19SpeedL30,
			L19SpeedL31,
			L19SpeedL32,
			L19SpeedL33,
			L19SpeedL34,
			L19SpeedL35,
			L19SpeedL36,
			L19SpeedL37,
			L19SpeedL38,
			L19Block108,
			L19Block109,
			L19Block110,
			L19SpeedU2,
			L19Flag
		]);
		let L20Block1 = new Blocks(12, 0, "Block");
		let L20Block2 = new Blocks(22, 0, "Block");
		let L20LockedPortal1 = new Blocks(
			2,
			1,
			"LockedPortal",
			"",
			"LockedPortal",
			0,
			20
		);
		let L20Purple1 = new Blocks(9, 1, "Purple");
		let L20Lava1 = new Blocks(14, 1, "Lava");
		let L20SpeedR1 = new Blocks(16, 1, "Speed", "Right");
		let L20Lava2 = new Blocks(7, 2, "Lava");
		let L20Block3 = new Blocks(12, 2, "Block");
		let L20LockedPortal2 = new Blocks(
			19,
			2,
			"LockedPortal",
			"",
			"LockedPortal",
			0,
			20
		);
		let L20Red1 = new Blocks(25, 2, "Red");
		let L20Key1 = new Blocks(28, 2, "Key", "", "Key");
		let L20Block4 = new Blocks(3, 4, "Block");
		let L20Lava3 = new Blocks(5, 4, "Lava");
		let L20Portal1 = new Blocks(10, 4, "Portal", "", "Portal", 0, 20);
		let L20Red2 = new Blocks(16, 4, "Red");
		let L20Block5 = new Blocks(23, 4, "Block");
		let L20Key2 = new Blocks(7, 5, "Key", "", "Key");
		let L20Portal2 = new Blocks(25, 5, "Portal", "", "Portal", 0, 20);
		let L20SpeedU1 = new Blocks(1, 6, "Speed", "Up");
		let L20Lava4 = new Blocks(14, 6, "Lava");
		let L20Block6 = new Blocks(19, 6, "Block");
		let L20Lava5 = new Blocks(22, 6, "Lava");
		let L20Block7 = new Blocks(28, 6, "Block");
		let L20Blue1 = new Blocks(6, 7, "Blue");
		let L20SpeedR2 = new Blocks(11, 7, "Speed", "Right");
		let L20Purple2 = new Blocks(16, 7, "Purple");
		let L20Red3 = new Blocks(2, 8, "Red");
		let L20LockedPortal3 = new Blocks(
			25,
			8,
			"LockedPortal",
			"",
			"LockedPortal",
			0,
			20
		);
		let L20Blue2 = new Blocks(27, 8, "Blue");
		let L20Purple3 = new Blocks(7, 9, "Purple");
		let L20Block8 = new Blocks(10, 9, "Block");
		let L20Blue3 = new Blocks(17, 9, "Blue");
		let L20Block9 = new Blocks(4, 10, "Block");
		let L20Portal3 = new Blocks(14, 10, "Portal", "", "Portal", 0, 20);
		let L20Block10 = new Blocks(20, 10, "Block");
		let L20Blue4 = new Blocks(18, 11, "Blue");
		let L20SpeedL1 = new Blocks(23, 11, "Speed", "Left");
		let L20Portal4 = new Blocks(28, 11, "Portal", "", "Portal", 28, 13);
		let L20Lava6 = new Blocks(2, 12, "Lava");
		let L20Lava7 = new Blocks(8, 12, "Lava");
		let L20Portal5 = new Blocks(26, 12, "Portal", "", "Portal", 5, 14);
		let L20Red4 = new Blocks(12, 13, "Red");
		let L20Block11 = new Blocks(16, 13, "Block");
		let L20Key3 = new Blocks(23, 13, "Key", "", "Key");
		let L20Portal6 = new Blocks(28, 13, "Portal", "", "Portal", 28, 11);
		let L20Portal7 = new Blocks(5, 14, "Portal", "", "Portal", 26, 12);
		let L20LockedPortal4 = new Blocks(
			20,
			14,
			"LockedPortal",
			"",
			"LockedPortal",
			0,
			20
		);
		let L20Blue5 = new Blocks(3, 15, "Blue");
		let L20SpeedU2 = new Blocks(14, 15, "Speed", "Up");
		let L20SpeedL2 = new Blocks(24, 15, "Speed", "Left");
		let L20Purple4 = new Blocks(26, 15, "Purple");
		let L20Block12 = new Blocks(27, 15, "Block");
		let L20SpeedR3 = new Blocks(28, 15, "Speed", "Right");
		let L20Lava8 = new Blocks(29, 15, "Lava");
		let L20SpeedU3 = new Blocks(1, 16, "Speed", "Up");
		let L20Blue6 = new Blocks(8, 16, "Blue");
		let L20Red5 = new Blocks(18, 16, "Red");
		let L20SpeedR4 = new Blocks(26, 16, "Speed", "Right");
		let L20Block13 = new Blocks(10, 17, "Block");
		let L20Purple5 = new Blocks(16, 17, "Purple");
		let L20Lava9 = new Blocks(22, 17, "Lava");
		let L20Lava10 = new Blocks(26, 17, "Lava");
		let L20Purple6 = new Blocks(5, 18, "Purple");
		let L20Red6 = new Blocks(7, 18, "Red");
		let L20Portal8 = new Blocks(13, 18, "Portal", "", "Portal", 0, 20);
		let L20Blue7 = new Blocks(20, 18, "Blue");
		let L20Block14 = new Blocks(26, 18, "Block");
		let L20SpeedR5 = new Blocks(1, 19, "Speed", "Right");
		let L20SpeedR6 = new Blocks(2, 19, "Speed", "Right");
		let L20SpeedU4 = new Blocks(3, 19, "Speed", "Up");
		let L20Lava11 = new Blocks(16, 19, "Lava");
		let L20Key4 = new Blocks(26, 19, "Key", "", "Key");
		let L20Platform1 = new Blocks(27, 19, "Platform");
		let L20Blue8 = new Blocks(28, 19, "Blue");
		let L20Red7 = new Blocks(29, 19, "Red");
		let L20Flag = new Blocks(28, 18, "Flag");
		Levels.push([
			L20Block1,
			L20Block2,
			L20LockedPortal1,
			L20Purple1,
			L20Lava1,
			L20SpeedR1,
			L20Lava2,
			L20Block3,
			L20LockedPortal2,
			L20Red1,
			L20Key1,
			L20Block4,
			L20Lava3,
			L20Portal1,
			L20Red2,
			L20Block5,
			L20Key2,
			L20Portal2,
			L20SpeedU1,
			L20Lava4,
			L20Block6,
			L20Lava5,
			L20Block7,
			L20Blue1,
			L20SpeedR2,
			L20Purple2,
			L20Red3,
			L20LockedPortal3,
			L20Blue2,
			L20Purple3,
			L20Block8,
			L20Blue3,
			L20Block9,
			L20Portal3,
			L20Block10,
			L20Blue4,
			L20SpeedL1,
			L20Portal4,
			L20Lava6,
			L20Lava7,
			L20Portal5,
			L20Red4,
			L20Block11,
			L20Key3,
			L20Portal6,
			L20Portal7,
			L20LockedPortal4,
			L20Blue5,
			L20SpeedU2,
			L20SpeedL2,
			L20Purple4,
			L20Block12,
			L20SpeedR3,
			L20Lava8,
			L20SpeedU3,
			L20Blue6,
			L20Red5,
			L20SpeedR4,
			L20Block13,
			L20Purple5,
			L20Lava9,
			L20Lava10,
			L20Purple6,
			L20Red6,
			L20Portal8,
			L20Blue7,
			L20Block14,
			L20SpeedR5,
			L20SpeedR6,
			L20SpeedU4,
			L20Lava11,
			L20Key4,
			L20Platform1,
			L20Blue8,
			L20Red7,
			L20Flag
		]);
		let EndBlock1 = new Blocks(0, 19, "Block");
		let EndBlock2 = new Blocks(1, 19, "Block");
		let EndBlock3 = new Blocks(2, 19, "Block");
		let EndBlock4 = new Blocks(3, 19, "Block");
		let EndBlock5 = new Blocks(4, 19, "Block");
		let EndBlock6 = new Blocks(5, 19, "Block");
		let EndBlock7 = new Blocks(6, 19, "Block");
		let EndBlock8 = new Blocks(7, 19, "Block");
		let EndBlock9 = new Blocks(8, 19, "Block");
		let EndBlock10 = new Blocks(9, 19, "Block");
		let EndBlock11 = new Blocks(10, 19, "Block");
		let EndBlock12 = new Blocks(11, 19, "Block");
		let EndBlock13 = new Blocks(12, 19, "Block");
		let EndBlock14 = new Blocks(13, 19, "Block");
		let EndBlock15 = new Blocks(14, 19, "Block");
		let EndBlock16 = new Blocks(15, 19, "Block");
		let EndBlock17 = new Blocks(16, 19, "Block");
		let EndBlock18 = new Blocks(17, 19, "Block");
		let EndBlock19 = new Blocks(18, 19, "Block");
		let EndBlock20 = new Blocks(19, 19, "Block");
		let EndBlock21 = new Blocks(20, 19, "Block");
		let EndBlock22 = new Blocks(21, 19, "Block");
		let EndBlock23 = new Blocks(22, 19, "Block");
		let EndBlock24 = new Blocks(23, 19, "Block");
		let EndBlock25 = new Blocks(24, 19, "Block");
		let EndBlock26 = new Blocks(25, 19, "Block");
		let EndBlock27 = new Blocks(26, 19, "Block");
		let EndBlock28 = new Blocks(27, 19, "Block");
		let EndBlock29 = new Blocks(28, 19, "Block");
		let EndBlock30 = new Blocks(29, 19, "Block");
		Levels.push([
			EndBlock1,
			EndBlock2,
			EndBlock3,
			EndBlock4,
			EndBlock5,
			EndBlock6,
			EndBlock7,
			EndBlock8,
			EndBlock9,
			EndBlock10,
			EndBlock11,
			EndBlock12,
			EndBlock13,
			EndBlock14,
			EndBlock15,
			EndBlock16,
			EndBlock17,
			EndBlock18,
			EndBlock19,
			EndBlock20,
			EndBlock21,
			EndBlock22,
			EndBlock23,
			EndBlock24,
			EndBlock25,
			EndBlock26,
			EndBlock27,
			EndBlock28,
			EndBlock29,
			EndBlock30
		]);
	}
};
