<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idConsultation');
            $table->foreign('idConsultation')->references('idConsultation')->on('consultations')
            ->onDelete('cascade');
            $table->string("BlocOperatoire");
            $table->string("Observation");
            $table->date("DateDebut");
            $table->date("DateFin");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('operations');
    }
};
