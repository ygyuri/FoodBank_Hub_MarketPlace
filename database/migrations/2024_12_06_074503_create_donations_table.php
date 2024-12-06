<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonationsTable extends Migration
{
    public function up()
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // Type of donation (e.g., food, clothing, money)
            $table->integer('quantity'); // Quantity of items donated (or amount for money)
            $table->foreignId('donor_id')->constrained('users')->onDelete('cascade'); // Donor's user ID
            $table->foreignId('foodbank_id')->constrained('users')->onDelete('cascade'); // Foodbank's ID
            $table->foreignId('recipient_id')->nullable()->constrained('users')->onDelete('set null'); // Recipient's user ID (nullable, because not all donations are assigned to recipients)
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('donations');
    }
}
