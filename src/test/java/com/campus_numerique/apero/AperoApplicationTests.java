package com.campus_numerique.apero;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class AperoApplicationTests {

	@Test
	void pasEncoreAperoDummyTest() {

		ObtenirHeureService mockHeureService = mock(ObtenirHeureService.class);

        when(mockHeureService.maintenant())
				.thenReturn(LocalDateTime.of(LocalDate.now(), LocalTime.of(10, 0))); //any subsequent call will return -1

		assertEquals(new AperoService(mockHeureService).estCeQueCestLheureDeLapero(), "C'est pas l'heure de l'apéro :'(");
	}

}
