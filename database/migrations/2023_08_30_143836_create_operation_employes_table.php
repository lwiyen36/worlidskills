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
        Schema::create('operation_employes', function (Blueprint $table) {
            $table->unsignedBigInteger('idEmploye');
            $table->foreign('idEmploye')->references('idEmp')->on('employes')
            ->onDelete('cascade');
            $table->unsignedBigInteger('idOperation');
            $table->foreign('idOperation')->references('id')->on('operations')
            ->onDelete('cascade');
            $table->primary(['idEmploye','idOperation']);
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
        Schema::dropIfExists('operation_employes');
    }
};
